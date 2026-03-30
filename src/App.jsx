import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
    <>
      <h1>The React Shopping Mall!</h1>
      <hr />
    </>
  )
}

export default App