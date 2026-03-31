import React, {useContext} from 'react'
import { CartContext } from './cart.jsx'    

function Card({product}) {
    const {addToCart} = useContext(CartContext)

  return (
    <div className="border p-4 rounded-lg shadow-sm flex flex-col items-center">
        <img src={product.image} alt={product.title} className="h-40 object-contain mb-4" />
        <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
        <p className="text-gray-700 mb-4">${product.price}</p>
        <button onClick={() => addToCart(product)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add to Cart</button>
    </div>


  )
}

export default Card