import { useEffect, useState } from 'react';
import { useRecipes } from './hooks/getRecipes';

import ProductsList from './components/ProductsList';
import Product from './components/Product';

import CommentsList from './components/CommentsList';
import Comment from './components/Comment';

import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';

import CreateComment from './components/CreateComment';
import Modal from './components/Modal';
import { useComments } from './hooks/getComments';

const App = () => {

    useEffect(() => {
      console.clear()
    }, [])

    function handleModal() {
        setModal(prev => !prev)
    }

    const {recipes, recipesLoad, recipesError} = useRecipes()
    const {comments, commentsLoad, commentsError} = useComments()

    const [modal, setModal] = useState(false)

    return (
        <div className='wrapper'>
            <ProductsList>
            <button
                className='popup'
                type="button"
                onClick={handleModal}
                >📧</button>
            {recipesLoad && <Loader />}
            {recipesError && <ErrorMessage reason="Ошибка загрузки рецептов"/>}
            {recipes.map(recipe => {
                return <Product product={recipe} key={recipe.id} />;
            })}
            </ProductsList>
            <CommentsList>
            {commentsLoad && <Loader/>}
            {commentsError && <ErrorMessage reason="Ошибка загрузки коментариев"/>}
            {comments.map(comment => {
                return <Comment comment={comment} key={comment.id}/>
            })}
            </CommentsList>
            { modal &&
                <Modal title='Comment!'>
                    <CreateComment switch={handleModal}/>
                </Modal>
            }
        </div>
    )
}
 
export default App;
