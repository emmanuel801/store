import React from 'react';

const Sidebar = ({ cart, removeFromCart, isOpen, setIsOpen }) => {
  return (
    <div
      className={`fixed right-0 top-0 h-screen w-64 p-4 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Cart Items</h2>
        <button
          className="text-gray-500 hover:text-gray-700"
          onClick={() => setIsOpen(false)} 
        >
          Close
        </button>
      </div>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item, index) => (
            <div key={index} className="p-4 bg-gray-200 rounded-md hover:bg-gray-300 transition">
              <h3 className="text-lg font-semibold">{item.Brand}</h3>
              <p>{item.Description}</p>
              <p>{item.Price}</p>
              <button
                className="mt-2 px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition"
                onClick={() => removeFromCart(item)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;