import React from 'react'
import Product from './Product'

function Products({products, addRemoveFavorites}){
    return (
        <div className='products'>
            {products.map((product)=>(
                <Product product={product} addRemoveFavorites={addRemoveFavorites}/>
            ))}
        </div>
    )
}

export default Products