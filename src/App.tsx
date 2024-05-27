import { ErrorInfo, useEffect, useState } from 'react';
import Product from './components/product';
import ProductsList from './components/productsList';
import { IProduct } from './models';

const App = () => {



  const [recipes, setRecipes] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function getFood() {
    try {
      setLoading(true)

      // Response (англ. "ответ") - буквально ответ сервера
      // Response всегда возвращает объект Response{}
      // В нем указана общая информация по ответу сервера (status, url, headers и т.д.)
      const response = await fetch('https://dummyjson.com/recipe?limit=5'); // "?limit=5" Указывает лимит
      
      // Метод json() объекта Response декодирует тело ответа в нужном нам формате JSON
      const data = await response.json();
      
      // Вставляем наш массив в состояние
      setRecipes(data.recipes);
      setLoading(false)
      
    // Catch нужен для продолжения работы приложения в случае ошибки, иначе приложение ляжет
  } catch (error: any) {
      setLoading(false);
      setError(error);
    }  
  }

  useEffect(() => {
    console.clear();
    getFood();
  }, []);

  return (
    <div className='wrapper'>
      <ProductsList>
        {error && 'Error'}
        {loading && 'Loading'}
        {recipes.map(recipe => {
          return <Product product={recipe} key={recipe.id} />;
        })}
      </ProductsList>
    </div>
  )
}
 
export default App;
