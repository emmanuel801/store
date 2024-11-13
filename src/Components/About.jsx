import React from "react";

const About = () => {
  return (
    <div className="p-6 bg-gray-100 text-gray-800">
      <section className="text-center py-10 bg-gray-800 text-white">
        <h1 className="text-4xl font-bold mb-4">About MyOkirika Business</h1>
        <p className="max-w-2xl mx-auto text-gray-300">
          Discover the story behind our brand, our values, and our commitment to delivering high-quality, sustainable products.
        </p>
      </section>

      <div className="container mx-auto mt-10">
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700">
            At FaviStores Business, our mission is to make sustainable and affordable fashion accessible to everyone. We believe in reducing waste and promoting eco-friendly practices by providing quality secondhand clothing. Our goal is to inspire change in the way we shop and think about fashion.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700">
            Founded in 1865, FaviStores  Business started as a small initiative to offer secondhand clothing to people who value quality and sustainability. What began as a local venture has grown into a trusted e-commerce platform, connecting like-minded individuals who are passionate about the environment and fashion.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Our Products</h2>
          <p className="text-gray-700">
            We carefully source our clothing from reliable suppliers, ensuring that each piece meets our high standards of quality and style. From vintage finds to current trends, our collection offers a wide variety of options for every taste. Each item is thoroughly checked, cleaned, and prepared for a new life in your wardrobe.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li><strong>Sustainability:</strong> We’re dedicated to reducing waste and promoting a circular economy through resale.</li>
            <li><strong>Quality Assurance:</strong> Every item is inspected to meet our standards of quality and durability.</li>
            <li><strong>Affordable Prices:</strong> Enjoy high-quality fashion at a fraction of the cost.</li>
            <li><strong>Customer Satisfaction:</strong> Our friendly support team is here to help you with any questions or concerns.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;