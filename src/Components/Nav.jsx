import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative text-white bg-black shadow-lg h-24">
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 object-cover w-full h-full opacity-50"
      >
        <source src="https://www.shutterstock.com/shutterstock/videos/1099143059/preview/stock-footage-fashion-model-posing-alone-outdoors-portrait-serious-young-man-looking-camera-at-summer-street.webm" type="video/mp4" />
      </video>
      <div className="relative z-10 flex items-center justify-between px-4 py-4 mx-auto max-w-7xl">
        <Link to="/" className="text-xl font-bold">Favi Store</Link>
        <div className="hidden space-x-4 md:flex">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
          <Link to="/products" className="hover:text-gray-300">Products</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
        </div>
        <button onClick={toggleMenu} className="md:hidden">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="flex flex-col items-center py-4 space-y-2 bg-gray-800 md:hidden">
          <Link to="/" className="text-gray-300">Home</Link>
          <Link to="/about" className="text-gray-300">About</Link>
          <Link to="/products" className="text-gray-300">Products</Link>
          <Link to="/contact" className="text-gray-300">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;