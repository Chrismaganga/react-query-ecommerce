import { Link } from "react-router-dom";
import { useCart } from "./cartContext";


const Cart = () => {
  const { cart, dispatch } = useCart();



  const handleRemoveFromCart = (id: string) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const handleCheckout = () => {
    alert("Checkout functionality coming soon!");
    dispatch({ type: "CLEAR_CART" });
  };

  if (cart.length === 0) {
    return <div className="text-center mt-10">Your cart is empty</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <div className="space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center border p-4 rounded">
            <div>
              <h2 className="text-lg font-bold">{item.title}</h2>
              <p>${item.price} x {item.quantity}</p>
            </div>
            <button
              onClick={() => handleRemoveFromCart(item.id)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
              Remove
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={handleCheckout}
        className="bg-green-500 text-white px-4 py-2 rounded mt-4 hover:bg-green-600">
          <Link to="/cart" className="hover:underline">Checkout</Link>

      </button>
    </div>
  );
};

export default Cart;
