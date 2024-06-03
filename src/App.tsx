import { useState } from 'react';
import { useRecipes } from './hooks/getRecipes';

import ProductsList from './components/ProductsList';
import Product from './components/Product';

import CommentsList from './components/CommentsList';
import Comment from './components/Comment';

import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';

import CreateForm from './components/CreateForm';
import Modal from './components/Modal';
import { useComments } from './hooks/getComments';

const App = () => {

    function handleModal() {
        setModal(prev => !prev)
    }

    const {recipes, recipesLoad, recipesError} = useRecipes()
    const {comments, commentsLoad, commentsError} = useComments()

// fetch('https://dummyjson.com/comments/add', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//         body: 'This makes all sense to me!',
//         postId: 3,
//         userId: 5,
//     })
// })

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
            {recipesError && <ErrorMessage />}
            {recipes.map(recipe => {
                return <Product product={recipe} key={recipe.id} />;
            })}
            </ProductsList>
            <CommentsList>
            {commentsLoad && <Loader/>}
            {commentsError && <ErrorMessage />}
            {comments.map(comment => {
                return <Comment comment={comment} key={comment.id}/>
            })}
            </CommentsList>
            { modal &&
                <Modal title='Comment!'>
                    <CreateForm switch={handleModal}/>
                </Modal>
            }
        </div>
    )
}
 
export default App;
