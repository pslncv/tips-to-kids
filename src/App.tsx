import { useEffect, useState } from 'react';
import { useRecipes } from './hooks/getRecipes';

import ProductsList from './components/ProductsList';
import Product from './components/product';

import CommentsList from './components/CommentsList';
import Comment from './components/Comment';

import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';

import CreateForm from './components/CreateForm';
import Modal from './components/Modal';
import { IComment } from './models';
import { useComments } from './hooks/getComments';

const App = () => {

  function handleModal() {
    setModal(prev => !prev)
  }

  const {recipes, loading, error} = useRecipes()
  const {comments} = useComments()

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
      <CommentsList>
        {comments.map(comment => {
          return <Comment comment={comment} key={comment.id}/>
        })}
      </CommentsList>
      { modal &&
      <Modal title='Contact us!'>
        <CreateForm switch={handleModal}/>
      </Modal>
      }
    </div>
  )
}
 
export default App;
