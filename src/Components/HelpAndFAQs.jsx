import React from "react";

const HelpAndFAQs = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Help & FAQs</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">General Questions</h2>
        <div className="border-b pb-4">
          <h3 className="font-semibold text-lg">What is MyBusiness?</h3>
          <p className="text-gray-600">
            Favi Store is your one-stop shop for clothing, electronics, jewelry, and hardware products with the best deals and quality service.
          </p>
        </div>
        <div className="border-b pb-4 mt-4">
          <h3 className="font-semibold text-lg">How can I create an account?</h3>
          <p className="text-gray-600">
            Click the "Sign Up" button on the top right corner of the homepage and fill in your details to create an account.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Orders and Shipping</h2>
        <div className="border-b pb-4">
          <h3 className="font-semibold text-lg">How do I track my order?</h3>
          <p className="text-gray-600">
            Log in to your account, go to "My Orders," and click on the tracking link for your order.
          </p>
        </div>
        <div className="border-b pb-4 mt-4">
          <h3 className="font-semibold text-lg">What are your shipping options?</h3>
          <p className="text-gray-600">
            We offer standard, express, and international shipping options. Delivery times and costs vary by location.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Returns and Refunds</h2>
        <div className="border-b pb-4">
          <h3 className="font-semibold text-lg">What is your return policy?</h3>
          <p className="text-gray-600">
            You can return items within 30 days of delivery as long as they are in their original condition. Visit our Returns & Exchanges page for more details.
          </p>
        </div>
        <div className="border-b pb-4 mt-4">
          <h3 className="font-semibold text-lg">When will I receive my refund?</h3>
          <p className="text-gray-600">
            Refunds are typically processed within 5-7 business days after we receive your returned item.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HelpAndFAQs;