import { useNavigate } from "react-router-dom";

const Sidebar = ({ cart, removeFromCart, updateQuantity, isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div
      className={`fixed top-0 left-0 h-screen w-full p-4 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Cart Items</h2>
        <button className="text-gray-500 hover:text-gray-700" onClick={() => setIsOpen(false)}>
          Close
        </button>
      </div>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="overflow-y-auto h-4/6 space-y-4 pr-2">
            {cart.map((item, index) => (
              <div key={index} className="p-4 bg-gray-200 rounded-md">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p>Price: ${item.price}</p>
                <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                <div className="flex items-center mt-2">
                  <button
                    className="px-2 py-1 bg-blue-500 text-white rounded-l hover:bg-blue-600 transition"
                    onClick={() => updateQuantity(item, -1)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="px-4 py-1 bg-gray-300">{item.quantity}</span>
                  <button
                    className="px-2 py-1 bg-blue-500 text-white rounded-r hover:bg-blue-600 transition"
                    onClick={() => updateQuantity(item, 1)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="mt-2 px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition"
                  onClick={() => removeFromCart(item)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <p className="font-bold mt-4">Total Amount: ${totalAmount.toFixed(2)}</p>
        </>
      )}
      <button
        className="mt-6 w-full px-3 py-2 text-sm bg-gray-700 text-white rounded hover:bg-gray-800 transition"
        onClick={() => navigate("/")}
      >
        Back to Home
      </button>
    </div>
  );
};

export default Sidebar;