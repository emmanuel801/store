import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import Nav from "./Components/Nav";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Main from "./Components/Main";
import ProductDetails from "./Components/ProductDetails";
import TermsAndConditions from "./Components/TermsAndConditions";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import HelpAndFAQs from "./Components/HelpAndFAQs";

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
  };

  const removeFromCart = (itemToRemove) => {
    setCart(cart.filter((item) => item.id !== itemToRemove.id));
  };

  const updateQuantity = (item, amount) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + amount }
          : cartItem
      )
    );
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Nav
          cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <div className="container flex-grow p-4 mx-auto">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/products"
              element={<Home addToCart={addToCart} setDetails={setDetails} />}
            />
            <Route
              path="/product/:id"
              element={<ProductDetails details={details} />}
            />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/help-and-faqs" element={<HelpAndFAQs />} />
          </Routes>
        </div>
        <Sidebar
          cart={cart}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
          isOpen={isSidebarOpen}
          setIsOpen={setIsSidebarOpen}
        />
        <Footer />
      </div>
    </Router>
  );
}

export default App;