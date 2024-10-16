import React, { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div>
              <a href="/" className="flex items-center py-5 px-2 text-gray-700">
                <svg
                  className="h-8 w-8 mr-2 text-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"

                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                <span className="font-bold text-xl">MyOkirika Business Website</span>
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              <a href="/" className="py-5 px-3 text-gray-700 hover:text-gray-900">
                Home
              </a>
              <a href="/" className="py-5 px-3 text-gray-700 hover:text-gray-900">
                About
              </a>
              <a href="/" className="py-5 px-3 text-gray-700 hover:text-gray-900">
                Services
              </a>
              <a href="/" className="py-5 px-3 text-gray-700 hover:text-gray-900">
                Contact
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="mobile-menu-button">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
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
      </div>


      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <a href="/" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Home
        </a>
        <a href="/" className="block py-2 px-4 text-sm hover:bg-gray-200">
          About
        </a>
        <a href="/" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Products
        </a>
        <a href="/" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Contact
        </a>
 
        
      </div>
    </nav>
  );
};

export default Nav;
