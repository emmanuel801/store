import React from "react";

const Contact = () => {
  return (
    <div className="p-4">
      <section id="contact" className="py-20 text-center text-white bg-gray-800">
        <h1 className="mb-4 text-4xl font-bold">Get In Touch</h1>
        <p className="mb-6 text-gray-300 max-w-2xl mx-auto">
          Whether you have a question about your order, products, services, or anything else, our team is ready to answer all your questions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div>
            <h2 className="text-xl font-semibold mb-2">Customer Support</h2>
            <p className="text-gray-400">Our customer support team is here to help you 24/7 with any questions or concerns.</p>
            <p className="mt-2"><strong>Email:</strong> favistores@mybusiness.com</p>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-2">Phone Support</h2>
            <p className="text-gray-400">Feel free to reach out by phone for immediate assistance during business hours.</p>
            <p className="mt-2"><strong>Phone:</strong> +234 803-582-0117</p>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-2">Frequently Asked Questions</h2>
            <p className="text-gray-400">Check out our FAQs for answers to common questions about shipping, returns, and more.</p>
            <a href="/faq" className="mt-2 text-blue-400 hover:underline">View FAQs</a>
          </div>
        </div>

        <div className="mt-12 max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
          <form className="flex flex-col space-y-4">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="p-3 rounded bg-gray-700 placeholder-gray-400 text-white focus:ring focus:ring-blue-400" 
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="p-3 rounded bg-gray-700 placeholder-gray-400 text-white focus:ring focus:ring-blue-400" 
            />
            <textarea 
              placeholder="Your Message" 
              className="p-3 h-32 rounded bg-gray-700 placeholder-gray-400 text-white focus:ring focus:ring-blue-400" 
            />
            <button 
              type="submit" 
              className="px-6 py-3 bg-blue-600 rounded text-white hover:bg-blue-700 transition duration-200">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
