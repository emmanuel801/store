import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Main = ({ addToCart, setDetails }) => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setFeaturedProducts(data.slice(0, 4));
      setDetails(data);
    };

    fetchData();
  }, [setDetails]);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative h-[70vh] bg-cover bg-center mt-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1698707890152-8d33419d526e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold">Welcome to Favi Store!</h1>
          <p className="max-w-md mt-4 text-lg">
            Discover the latest trends in fashion, handpicked and curated just for you. Shop the styles you love at prices you'll adore.
          </p>
          <Link to="/shop" className="px-6 py-3 mt-6 text-lg font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700">
            Start Shopping
          </Link>
        </div>
      </section>

      <section className="container mx-auto py-10">
        <h2 className="text-3xl font-semibold text-center">Featured Products</h2>
        <p className="max-w-lg mx-auto mt-2 text-center text-gray-600">
          Browse some of our best-selling items and discover new favorites. These products are selected based on customer ratings and popularity.
        </p>

        <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {featuredProducts.length > 0 ? (
            featuredProducts.map((item) => (
              <div key={item.id} className="p-4 transition bg-white border rounded-lg shadow-lg hover:bg-gray-100">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <img src={item.image} alt={item.title} className="object-cover w-full h-40 mt-2 rounded-lg" />
                <p className="mt-2 text-gray-600">Price: ${item.price}</p>
                <Link to={`/product/${item.id}`} className="text-blue-500">View Details</Link>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">Loading featured products...</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Main;
