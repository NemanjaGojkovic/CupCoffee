import React from 'react'

function Navbar({numFavorite}){
    return (
    <div className="inner-width">  
        <nav className="navigation-menu">
          <h1 className='title'>CupCoffee</h1>
          <a href="#"> Početna</a>
          <a href="#"> Proizvodi</a>
          <a href="#"> Kontakt</a>
          <a href="#" className='fav'> Omiljeno <div className='numFav'>{numFavorite}</div></a>
        </nav>
      </div>

    )
}

export default Navbar