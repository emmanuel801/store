import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Sidebar from './Components/Sidebar'
import Nav from './Components/Nav'

function App() {
  const [cart, setCart] = useState([]);


  const removeFromCart = (itemToRemove) => {
    setCart(cart.filter(item => item !== itemToRemove));
  };


  return (
    <>
    <Nav/>
    <Sidebar cart={cart} removeFromCart={removeFromCart} />
    <Home/>
    <Footer/>

    </>
  )
}

export default App
