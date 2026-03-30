import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/home';
import Card from './component/card';
import Cart from './component/cart';
import Checkout from './component/checkout';
import Details from './component/details';
import List from './component/list';
import Navbar from './component/navbar';
import Search from './component/search';
import Login from './component/login';


//Nested routing 
import Overview from './component/product/overview';
import Reviews from './component/product/reviews';
import Specs from './component/product/specs';

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path ='/' element = {<Home/>}/>
          <Route path ='/login' element = {<Login/>}/>
          <Route path ='/products' element = {<List/>}/>
          <Route path ='/cart' element = {<Cart/>}/>
          <Route path ='/checkout' element = {<Checkout/>}/>
          
          <Route path = 'products/:id' element = {<Details/>}>
            <Route index element = {<Overview/>}/>
            <Route path = 'reviews' element = {<Reviews/>}/>
            <Route path = 'specs' element = {<Specs/>}/>
          </Route>  
        </Routes>
    </BrowserRouter>
  )
}

export default App