import React from 'react'
import Product from './Product'

function Products({products}){
    return (
        <div className='products'>
            <Product product={products[0]}></Product>
            <Product product={products[1]}></Product>
            <Product product={products[2]}></Product>
            <Product product={products[3]}></Product>
            <Product product={products[4]}></Product>
            <Product product={products[5]}></Product>
        </div>
    )
}

export default Products