import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null); // null = logged out
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({ category: 'all', priceRange: [0, 1000] });

  // Fetch real products from an API
  useEffect(() => {
    fetch('https://fakestoreapi.com')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const addToCart = (product) => {
    setCart((prev) => [...prev, { ...product, cartId: Date.now() }]);
  };

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <CartContext.Provider value={{ 
      cart, addToCart, user, login, logout, products, filters, setFilters 
    }}>
      {children}
    </CartContext.Provider>
  );
};
