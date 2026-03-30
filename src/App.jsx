import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import home from './component/home';
import card from './component/card';
import cart from './component/cart';
import checkout from './component/checkout';
import details from './component/details';
import list from './component/list';
import navbar from './component/navbar';
import search from './component/search';
import login from './component/login';

//Nested routing 
import overview from './component/product/overview';
import reviews from './component/product/reviews';
import specs from './component/product/specs';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path ='/' element = {<home/>}/>
          <Route path ='/login' element = {<login/>}/>
          <Route path ='/products' element = {<list/>}/>
          <Route path ='/cart' element = {<cart/>}/>
          <Route path ='/checkout' element = {<checkout/>}/>
          
          <Route path = 'products/:id' element = {<details/>}>
            <Route index element = {<overview/>}/>
            <Route path = 'reviews' element = {<reviews/>}/>
            <Route path = 'specs' element = {<specs/>}/>
          </Route>  
        </Routes>
    </BrowserRouter>
  )
}

export default App