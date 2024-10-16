import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { FaSearch } from "react-icons/fa"; // Import the search icon

const Home = () => {
  const [details, setDetails] = useState([]);
  const [cart, setCart] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // State to hold search input

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://ecommerce-api3.p.rapidapi.com/menswear",
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "a58e3217famsh6583940fa189df5p15550fjsn348150588e84",
            "X-RapidAPI-Host": "ecommerce-api3.p.rapidapi.com",
          },
        }
      );
      const data = await response.json();
      setDetails(data);
    };

    fetchData();
  }, []);

  const addToCart = (item) => {
    setCart([...cart, item]);
    setIsSidebarOpen(true);
  };

  const removeFromCart = (itemToRemove) => {
    setCart(cart.filter((item) => item !== itemToRemove));
  };

  const filteredDetails = details.filter((item) =>
    item.Brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="w-full min-h-screen px-4 py-6 bg-gray-300 border-2 rounded">
        
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
            className="w-full h-10 p-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
        </div>

        {/* Grid Layout for Product Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredDetails.length > 0 ? (
            filteredDetails.map((item) => (
              <div
                key={item.Brand}
                className="flex flex-col justify-between p-4 border rounded-lg shadow-md bg-slate-200 hover:bg-blue-200 transition ease-in-out"
              >
                <h1 className="text-xl font-semibold sm:text-2xl lg:text-3xl">
                  {item.Brand}
                </h1>
                <img
                  className="object-cover w-full h-48 mt-2 rounded-lg"
                  src={item.Image}
                  alt={item.Brand}
                />
                <h2 className="mt-4 text-base text-gray-800 sm:text-lg lg:text-xl">
                  {item.Description}
                </h2>
                <h2 className="mt-4 text-base text-gray-800 sm:text-lg lg:text-xl">
                  {item.Unnamed}
                </h2>
                <h3 className="mt-2 text-sm font-medium text-gray-600 sm:text-base lg:text-lg">
                  {item.Price}
                </h3>
                <h4 className="mt-1 text-xs text-gray-500 sm:text-sm">
                  {item.Tag}
                </h4>
                <button
                  className="p-2 mt-4 text-sm text-center text-white bg-blue-500 border border-transparent rounded-full sm:text-base hover:bg-blue-600"
                  onClick={() => addToCart(item)}
                >
                  ADD TO CART
                </button>
              </div>
            ))
          ) : (
            <p>No items found.</p>
          )}
        </div>
      </div>

      {/* Sidebar Component */}
      <Sidebar
        cart={cart}
        removeFromCart={removeFromCart}
        isOpen={isSidebarOpen} 
        setIsOpen={setIsSidebarOpen} 
      />
    </>
  );
};

export default Home;