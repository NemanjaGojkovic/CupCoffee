import React from 'react'

function Product({product}){
    return (
        <div className='product'>
            <img src={product.img} alt="" className='image' />
            <p className='name'>{product.name}</p>
            <p className='price'>{product.price}</p>
            <button className='save'><i className='fa fa-bookmark-o'></i></button>
        </div>
    )
}

export default Product