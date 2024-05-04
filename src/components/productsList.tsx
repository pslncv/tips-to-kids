import React from 'react';

const ProductsList = ({ children }: any) => {

    return (
        <div className='product__list'>
            {children}
        </div>
    );
}
 
export default ProductsList;