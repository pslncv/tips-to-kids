import { useEffect, useState } from 'react';
// import { productsList } from '../src/data/products';
import Product from './components/product';
import ProductsList from './components/productsList';
import { IProduct } from './models';

const App = () => {

  const [recipes, setRecipes] = useState<IProduct[]>([]);

  const getProducts = async () => {
    try {
      const response = await fetch('https://dummyjson.com/recipe');
      const data = await response.json();
      setRecipes(data.recipes);
    } catch (error) {
      console.log(error); 
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className='wrapper'>
      <ProductsList>
        {recipes.map(recipe => {
          return <Product product={recipe} key={recipe.id} />;
        })}
      </ProductsList>
    </div>
  )
}
 
export default App;
