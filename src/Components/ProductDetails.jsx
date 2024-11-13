  import React from "react";
  import { useParams, Link } from "react-router-dom";

  const ProductDetails = ({ details }) => {
    const { id } = useParams();
    const product = details.find((item) => item.id === parseInt(id));

    if (!product) return <p>Product not found</p>;

    return (
      <div className="p-6">
        <Link to="/products" className="text-blue-500">Back to Products</Link>
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <img src={product.image} alt={product.title} className="object-cover w-full h-64" />
        <p className="mt-4">{product.description}</p>
        <h3 className="mt-2 text-lg font-medium text-gray-600">Price: ${product.price}</h3>
      </div>
    );
  };

  export default ProductDetails;
