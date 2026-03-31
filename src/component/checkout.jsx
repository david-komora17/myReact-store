import React, {useContext} from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { CartContext } from './cart';

const ProtectedCheckout = () => {
  const {user} = useContextContext(CartContext)
   
  // if no user is logged in, redirect to login page
  if (!user) {
    return <Navigate to="/login" replace/>
  } //if not putlet renders the checkout page
  return <Outlet/>
}
  
    return (
    <div>checkout</div>
  )


export default ProtectedCheckout