import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Nav = ({ cartCount, setIsSidebarOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative text-white bg-black shadow-lg h-24 z-50">
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
        <NavLink
          to="/"
          className="text-5xl font-bold transition duration-300 ease-in-out hover:text-gray-300"
        >
          Favi Store
        </NavLink>

        <div className="hidden space-x-4 md:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition duration-300 ease-in-out ${
                isActive ? "text-gray-300 border-b-2 border-white" : "hover:text-gray-300"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `transition duration-300 ease-in-out ${
                isActive ? "text-gray-300 border-b-2 border-white" : "hover:text-gray-300"
              }`
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `transition duration-300 ease-in-out ${
                isActive ? "text-gray-300 border-b-2 border-white" : "hover:text-gray-300"
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `transition duration-300 ease-in-out ${
                isActive ? "text-gray-300 border-b-2 border-white" : "hover:text-gray-300"
              }`
            }
          >
            Contact
          </NavLink>
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="flex flex-col items-center py-4 space-y-2 bg-gray-800 md:hidden animate-slideIn">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-gray-300 transition duration-300 ease-in-out ${
                isActive ? "text-white font-bold" : "hover:text-white"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `text-gray-300 transition duration-300 ease-in-out ${
                isActive ? "text-white font-bold" : "hover:text-white"
              }`
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-gray-300 transition duration-300 ease-in-out ${
                isActive ? "text-white font-bold" : "hover:text-white"
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-gray-300 transition duration-300 ease-in-out ${
                isActive ? "text-white font-bold" : "hover:text-white"
              }`
            }
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Nav;