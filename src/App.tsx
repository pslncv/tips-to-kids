import { useState } from 'react';
import CreateForm from './components/CreateForm';
import ErrorMessage from './components/ErrorMessage';
import Loader from './components/Loader';
import Modal from './components/Modal';
import Product from './components/product';
import ProductsList from './components/productsList';
import { useRecipes } from './hooks/getRecipes';

const App = () => {

  function handleModal() {
    setModal(prev => !prev)
  }

  const {recipes, loading, error} = useRecipes()
  const [modal, setModal] = useState(false)

  return (
    <div className='wrapper'>
      <ProductsList>
        <button
          className='popup'
          type="button"
          onClick={handleModal}
          >📧</button>
        {loading && <Loader />}
        {error && <ErrorMessage />}
        {recipes.map(recipe => {
          return <Product product={recipe} key={recipe.id} />;
        })}
      </ProductsList>
      { modal &&
      <Modal title='Contact us!'>
        <CreateForm switch={handleModal}/>
      </Modal>
      }
    </div>
  )
}
 
export default App;
