import { productsList } from '../src/data/products';
import Product from './components/product';
import ProductsList from './components/productsList';

const App = () => {
  console.clear()
  return (
    <div className='wrapper'>
      <ProductsList>
        <Product product={productsList[0]}/>
        <Product product={productsList[0]}/>
      </ProductsList>
    </div>
   )
}
 
export default App;
