import React, { useState } from 'react';
import Product from './components/product';

const App = () => {
  return (
    <div className='wrapper'>
        <div className='product__list'>
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
    </div>
   )
}
 
export default App;
