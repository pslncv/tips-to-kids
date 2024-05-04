import React from 'react';

const ProductsList = ({ children }: any) => {
    const childrenCount = React.Children.count(children)

    const listStyle = {
        justifyContent: childrenCount < 3 ? "start" : '',
    }

    return (
        <div className='product__list' style={listStyle}>
            {children}
        </div>
    );
}
 
export default ProductsList;