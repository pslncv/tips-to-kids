import { productsList } from '../src/data/products';
import Product from './components/product';

const App = () => {
  console.clear()
  return (
    <div className='wrapper'>
        <div className='product__list'>
            <Product product={productsList[0]}/>
            <Product product={productsList[0]}/>
            <Product product={productsList[0]}/>
        </div>
    </div>
   )
}
 
export default App;
