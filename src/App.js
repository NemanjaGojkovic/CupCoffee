
import './App.css';
import Body from './components/Body';
import FavoritesBody from './components/FavoritesBody';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Products from './components/Products';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {useState} from 'react'

function App() {

  const [products] = useState([
    {
      id: 1,
      img: "https://www.bastabalkana.com/wp-content/uploads/2013/05/Kako-se-pravi-dobra-espresso-kafa-%E2%80%93-uputstvo-za-bariste-i-konobare-kako-da-naprave-kvalitetan-espreso.jpg",
      name: "Espreso",
      price: 150,
      favorite : false
    },
    {
      id: 2,
      img: "https://ddl.rs/wp-content/uploads/2018/05/coffeepexels-1.jpg",
      name: "Espreso sa mlekom",
      price: 170,
      favorite : false
    },
    {
      id: 3,
      img: "https://www.196flavors.com/wp-content/uploads/2021/05/latte-macchiato-3fp.jpg",
      name: "Nescoffee",
      price: 210,
      favorite : false
    },
    {
      id: 4,
      img: "https://app.efiskalna.rs/image?file=uploads%2Fartikli%2F86_957_a192fb48197c41a4515284a85661fb5e.jpg&height=512",
      name: "Domaca kafa",
      price: 120,
      favorite : false
    },
    {
      id: 5,
      img: "https://media.istockphoto.com/id/481372934/photo/white-frappe-coffee.jpg?s=612x612&w=0&k=20&c=zeZ-oaBYa3wLcDZiO82fiijGTjZlNW2YZobeI2DAu-o=",
      name: "Frape",
      price: 240,
      favorite : false
    },
    {
      id: 6,
      img: "https://www.acouplecooks.com/wp-content/uploads/2021/02/Irish-Coffee-005s.jpg",
      name: "Irish coffee",
      price: 260,
      favorite : false
    }
  ])

  
  const [numFav, setNumFav]=useState(0)
  const [favProd, setFavProd]=useState([])
  
  const addFavorites = (id) =>{
    setNumFav(numFav+1)
    products.map((product)=>{
      if(product.id === id){
        product.favorite=true
      }
    })
    refreshFavorites()
  }

  const removeFavorite = (id) => {
    if(numFav>0){
      setNumFav(numFav-1)
    }
    products.map((product)=>{
      if(product.id === id){
        product.favorite=false
      }
    })
    refreshFavorites()
  }

  const refreshFavorites = () => {
    var newFav=products.filter((product)=>product.favorite===true)
    setFavProd(newFav)
  }

  return (
    <>
    <BrowserRouter>
      <Navbar numFavorite={numFav}></Navbar>
        <Routes>
          <Route path='/' element={
            <Body/>
          }/>
          <Route path='/products' element={
            <Products products={products} addFavorites={addFavorites} removeFavorite={removeFavorite}/>
          }/>
          <Route path='/favorites' element={
            <FavoritesBody products={favProd} removeFavorite={removeFavorite}/>
          }/>
        </Routes>
      <Footer></Footer>
    </BrowserRouter> 
    </>  
  );
}



export default App;
