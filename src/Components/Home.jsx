import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Home = ({ addToCart, setDetails }) => {
  const [localDetails, setLocalDetails] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setLocalDetails(data);
      setDetails(data);

      setTimeout(() => {
        setLoading(false); 
      }, 2000);
    };

    fetchData();
  }, [setDetails]);

  const filteredDetails = localDetails.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full min-h-screen py-6 bg-gray-200">
      <div className="relative max-w-md mx-auto mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full h-10 p-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <FaSearch className="absolute text-gray-500 transform -translate-y-1/2 top-1/2 left-3" />
      </div>

      {loading ? (
        <p className="text-center text-neutral-600">Loading products...</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredDetails.length > 0 ? (
            filteredDetails.map((item) => (
              <div key={item.id} className="p-4 transition bg-white border rounded-lg shadow-md hover:bg-gray-200">
                <h1 className="text-lg font-semibold">{item.title}</h1>
                <img src={item.image} alt={item.title} className="object-cover w-full h-40 mt-2 rounded-lg" />
                <h3 className="mt-2 text-gray-600">Price: ${item.price}</h3>
                <Link to={`/product/${item.id}`} className="text-blue-500">View Description</Link>
                <button onClick={() => addToCart(item)} className="block w-full py-2 mt-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                  Add to Cart
                </button>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full">No products found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;