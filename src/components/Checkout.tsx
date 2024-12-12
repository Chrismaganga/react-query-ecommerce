import { useCart } from "./cartContext";

const Checkout = () => {
    const { cart, dispatch } = useCart();
  
    const handleCheckout = () => {
      alert("Thank you for your purchase!");
      dispatch({ type: "CLEAR_CART" });
    };
  
    return (
      <div className="text-center mt-10">
        <h1 className="text-2xl font-bold mb-4">Checkout</h1>
        <p>Total Items: {cart.length}</p>
        <p>
          Total Price: $
          {cart.reduce((total, item) => total + item.price, 0).toFixed(2)}
        </p>
        <button
          onClick={handleCheckout}
          className="bg-green-500 text-white px-4 py-2 rounded mt-4 hover:bg-green-600"
        >
          Confirm Purchase
        </button>
      </div>
    );
  };
export default Checkout;  