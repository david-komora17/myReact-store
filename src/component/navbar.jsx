import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './component/cart.jsx'

function Navbar() {
    const {cart, user} = useContext(CartContext)
  return (
    <nav className="flex justify-between p-4 bg-gray-100 border-b">
      <Link to="/" className="font-bold text-xl">MyStore</Link>
      <div className="flex gap-4">
        <Link to="/products">Shop</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
        {user ? <span>Welcome, {user.name}</span> : <Link to="/login">Login</Link>}
      </div>
    </nav>
  );
}

export default Navbar