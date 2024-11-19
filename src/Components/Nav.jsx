import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Nav = ({ cartCount, setIsSidebarOpen }) => {
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
        <source
          src="https://www.shutterstock.com/shutterstock/videos/1099143059/preview/stock-footage-fashion-model-posing-alone-outdoors-portrait-serious-young-man-looking-camera-at-summer-street.webm"
          type="video/mp4"
        />
      </video>

      <div className="relative z-10 flex items-center justify-between px-4 py-4 mx-auto max-w-7xl mt-6">
        <Link to="/" className="text-5xl font-bold transition duration-300 ease-in-out hover:text-gray-300">Favi Store</Link>

        <div className="hidden space-x-4 md:flex">
          <Link to="/" className="transition duration-300 ease-in-out hover:text-gray-300">Home</Link>
          <Link to="/products" className="transition duration-300 ease-in-out hover:text-gray-300">Products</Link>
          <Link to="/about" className="transition duration-300 ease-in-out hover:text-gray-300">About</Link>
          <Link to="/contact" className="transition duration-300 ease-in-out hover:text-gray-300">Contact</Link>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="relative text-white hover:text-gray-300 transition duration-300 ease-in-out"
          >
            <FaShoppingCart size={24} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 inline-block w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full animate-pulse">
                {cartCount}
              </span>
            )}
          </button>

          <button onClick={toggleMenu} className="md:hidden">
            <svg
              className="w-6 h-6 text-white hover:text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="flex flex-col items-center py-4 space-y-2 bg-gray-800 md:hidden animate-slideIn">
          <Link to="/" className="text-gray-300 transition duration-300 ease-in-out hover:text-white">Home</Link>
          <Link to="/products" className="text-gray-300 transition duration-300 ease-in-out hover:text-white">Products</Link>
          <Link to="/about" className="text-gray-300 transition duration-300 ease-in-out hover:text-white">About</Link>
          <Link to="/contact" className="text-gray-300 transition duration-300 ease-in-out hover:text-white">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;