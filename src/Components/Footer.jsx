import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h1 className="text-xl font-bold">MyBusiness Website</h1>
        </div>
        
        <div className="mb-4 md:mb-0">
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:text-gray-400">Home</a></li>
            <li><a href="/" className="hover:text-gray-400">About</a></li>
            <li><a href="/" className="hover:text-gray-400">Services</a></li>
            <li><a href="/" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </div>

        <div className="flex space-x-4">
          <a href="/" aria-label="Facebook" className="hover:text-gray-400">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="/" aria-label="Twitter" className="hover:text-gray-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="/" aria-label="Instagram" className="hover:text-gray-400">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="/" aria-label="LinkedIn" className="hover:text-gray-400">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-6">
        <p>&copy; {new Date().getFullYear()} MyWebsite. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;