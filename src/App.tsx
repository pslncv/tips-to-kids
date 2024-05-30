import CreateForm from './components/CreateForm';
import ErrorMessage from './components/ErrorMessage';
import Loader from './components/Loader';
import Modal from './components/Modal';
import Product from './components/product';
import ProductsList from './components/productsList';
import { useRecipes } from './hooks/recipes';

const App = () => {

  const {recipes, loading, error} = useRecipes()

  return (
    <div className='wrapper'>
      <ProductsList>
        {loading && <Loader />}
        {error && <ErrorMessage />}
        {recipes.map(recipe => {
          return <Product product={recipe} key={recipe.id} />;
        })}
      </ProductsList>
      <Modal>
        <CreateForm />
      </Modal>
    </div>
  )
}
 
export default App;
