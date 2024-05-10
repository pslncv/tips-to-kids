import { useState } from 'react';
import { IProduct } from '../models';

interface ProductProps {
    product: IProduct
}

const Product = ({product}: ProductProps) => {
    let [counter, setCounter] = useState(0)
    return (
        <div className='product__item'>
            <div className='product__container'>
                <img src={product.image} alt={product.name} className='product__image'/>
                <div className='product__rating'>
                    <div>❤️</div>
                    <div>{product.rating}</div>
                </div>
            </div>
            <span className='product__title'>
                {product.name}
            </span>
            <span className='product__price'>
                ${product.prepTimeMinutes}
            </span>
            <div className="buttons">
                <button onClick={() => {              
                    if (counter > 0) setCounter(--counter)       
                }}>{"<"}</button>
                <div className="counter">Counter: {counter}
            </div>
            <button onClick={() => setCounter(++counter)}>{">"}</button>
            </div>
        </div>
    );
}
 
export default Product;