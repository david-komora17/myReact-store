import React, { useContext } from 'react' // Added useContext here
import { CartProvider } from './cart'
import Card from './card'
import { CartContext } from './cart'



function Home() {
    const {products} = useContext(CartContext)
      
    if (!products) return <div>Loading...</div>;

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