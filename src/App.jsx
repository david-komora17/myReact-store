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
        <routes>
          <route path ='/' element = {<home/>}/>
          <route path ='/login' element = {<login/>}/>
          <route path ='/products' element = {<list/>}/>
          <route path ='/cart' element = {<cart/>}/>
          <route path ='/checkout' element = {<checkout/>}/>
        </routes>
    </BrowserRouter>
  )
}

export default App