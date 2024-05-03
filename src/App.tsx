import React, { useState } from 'react';
import { recipes } from '../src/data/recipes';
import Product from './components/product';

const App = () => {
  return (
    <div className='wrapper'>
        <div className='product__list'>
            <Product product={recipes}/>
        </div>
    </div>
   )
}
 
export default App;
