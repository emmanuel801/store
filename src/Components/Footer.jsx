import React from 'react';

const Footer = () => {
  return (
    <footer className="py-10 text-white bg-gray-900">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
        
        <div className="flex flex-col items-start space-y-2">
          <h1 className="text-2xl font-bold hover:scale-105 transition-transform duration-200">MyBusiness Website</h1>
          <p className="text-gray-400 max-w-xs">Explore a world of clothing, electronics, jewelry, and hardware products with the best deals and quality service.</p>
          <div className="flex space-x-4 mt-2">
            <a href="/" aria-label="Facebook" className="hover:text-gray-400 transition-colors duration-200">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="/" aria-label="Twitter" className="hover:text-gray-400 transition-colors duration-200">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="/" aria-label="Instagram" className="hover:text-gray-400 transition-colors duration-200">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="/" aria-label="LinkedIn" className="hover:text-gray-400 transition-colors duration-200">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 text-sm md:flex md:space-x-8">
          <div>
            <h2 className="font-semibold text-lg mb-2 hover:underline">Customer Service</h2>
            <ul className="space-y-1">
              <li className="hover:text-gray-400 transition duration-200"><a href="/">Help & FAQs</a></li>
              <li className="hover:text-gray-400 transition duration-200"><a href="/">Shipping & Delivery</a></li>
              <li className="hover:text-gray-400 transition duration-200"><a href="/">Returns & Exchanges</a></li>
              <li className="hover:text-gray-400 transition duration-200"><a href="/">Contact Support</a></li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-2 hover:underline">Shop</h2>
            <ul className="space-y-1">
              <li className="hover:text-gray-400 transition duration-200"><a href="/">Men's Clothing</a></li>
              <li className="hover:text-gray-400 transition duration-200"><a href="/">Women's Clothing</a></li>
              <li className="hover:text-gray-400 transition duration-200"><a href="/">Jewelry</a></li>
              <li className="hover:text-gray-400 transition duration-200"><a href="/">Electronics</a></li>
              <li className="hover:text-gray-400 transition duration-200"><a href="/">Hardware</a></li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-2 hover:underline">Company</h2>
            <ul className="space-y-1">
              <li className="hover:text-gray-400 transition duration-200"><a href="/">About Us</a></li>
              <li className="hover:text-gray-400 transition duration-200"><a href="/">Careers</a></li>
              <li className="hover:text-gray-400 transition duration-200"><a href="/">Privacy Policy</a></li>
              <li className="hover:text-gray-400 transition duration-200"><a href="/">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500 border-t border-gray-700 pt-4">
        <p>&copy; {new Date().getFullYear()} MyBusiness Website. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;