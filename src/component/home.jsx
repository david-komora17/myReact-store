import React from 'react'
import { CartProvider } from './component/cart.jsx'
import Card from './card.jsx'
import { CartContext } from './cart.jsx'


function Home() {
    const {products} = useContext(CartContext)
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Featured Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map(product => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;