import React from 'react'
import {GrFavorite} from 'react-icons/gr'
import Navbar from './Navbar'


function Product({product, addRemoveFavorites}){
    
    return (
        <div className='product'>
            <img src={product.img} alt="" className='image' />
            <p className='name'>{product.name}</p>
            <p className='price'>Cena: {product.price}</p>
            <button className='save' onClick={()=>addRemoveFavorites(product.id)}><GrFavorite/></button>
        </div>
    )
}

export default Product