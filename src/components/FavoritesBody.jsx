import React from 'react'
import Product from './Product'

function FavoritesBody({products}){
    return (
    <div className="favorites-body">  
            {products.map((product)=>(
                <Product product={product}/>
            ))}
    </div>

    )
}

export default FavoritesBody