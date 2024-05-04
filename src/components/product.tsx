import {useState} from 'react';
import { IProduct } from '../models';

interface ProductProps {
    product: IProduct
}

const Product = (props: ProductProps) => {
    console.log(props);
    
    const [counter, setCounter] = useState(0)
    return (
        <div className='product__item'>
            <div className='product__container'>
                <img src={props.product.image} alt={props.product.name} className='product__image'/>
            </div>
            <span className='product__title'>
                {props.product.name}
            </span>
            <span className='product__price'>
                $12
            </span>
            <div className="buttons">
                <button onClick={() => {
                    if (counter > 0) setCounter(counter - 1)
                }}>{"<"}</button>
                <div className="counter">Counter: {counter}
            </div>
            <button onClick={() => setCounter(counter + 1)}>{">"}</button>
            </div>
        </div>
    );
}
 
export default Product;