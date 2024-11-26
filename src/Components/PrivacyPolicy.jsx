import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        Welcome to Favi Store! Your privacy is very important to us, and this policy outlines how we collect, use, and protect your information.
      </p>
      <h2 className="text-2xl font-semibold mt-4">Information We Collect</h2>
      <p className="mb-4">
        We may collect personal information such as your name, email address, phone number, and payment details when you use our services.
      </p>
      <h2 className="text-2xl font-semibold mt-4">How We Use Your Information</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>To provide and improve our services</li>
        <li>To process transactions</li>
        <li>To communicate with you regarding your orders and inquiries</li>
        <li>To send promotional emails (if opted in)</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-4">How We Protect Your Information</h2>
      <p className="mb-4">
        We implement security measures to safeguard your personal data. However, please note that no method of transmission over the internet is 100% secure.
      </p>
      <h2 className="text-2xl font-semibold mt-4">Third-Party Services</h2>
      <p className="mb-4">
        We may share your information with trusted third-party services for payment processing, shipping, and analytics. These services are obligated to protect your data.
      </p>
      <h2 className="text-2xl font-semibold mt-4">Your Rights</h2>
      <p className="mb-4">
        You have the right to access, update, or delete your personal data. For inquiries, contact us at support@mybusiness.com.
      </p>
      <p className="mt-4">Last updated: {new Date().toLocaleDateString()}</p>
    </div>
  );
};

export default PrivacyPolicy;