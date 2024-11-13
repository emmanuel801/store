import React, { useState } from 'react';
import './App.css';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Sidebar from './Components/Sidebar';
import Nav from './Components/Nav';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './Components/About';
import Contact from './Components/Contact';
import Main from './Components/Main';
import ProductDetails from './Components/ProductDetails';

function App() {
  const [cart, setCart] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [details, setDetails] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const itemExists = prevCart.find((cartItem) => cartItem.id === item.id);
      if (itemExists) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
    setIsSidebarOpen(true);
  };

  const removeFromCart = (itemToRemove) => {
    setCart(cart.filter((item) => item.id !== itemToRemove.id));
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Nav />
        <div className="container flex-grow p-4 mx-auto">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Home addToCart={addToCart} setDetails={setDetails} />} />
            <Route path="/product/:id" element={<ProductDetails details={details} />} />
          </Routes>
        </div>
        {isSidebarOpen && (
          <Sidebar
            cart={cart}
            removeFromCart={removeFromCart}
            isOpen={isSidebarOpen}
            setIsOpen={setIsSidebarOpen}
          />
        )}
        <Footer />
      </div>
    </Router>
  );
}

export default App;