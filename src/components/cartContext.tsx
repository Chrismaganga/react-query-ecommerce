import React, { createContext, useReducer, useContext, ReactNode } from "react";

// Define the structure for a cart item
interface CartItem {
  title: string | undefined;
  image: string | undefined;
  id: string;
  name: string;
  price: number;
  quantity: number;
}

// Define the shape of the state and actions
type CartState = CartItem[];

type CartAction =
  | { type: "ADD_TO_CART"; payload: CartItem }
  | { type: "REMOVE_FROM_CART"; payload: string } // payload is the item ID
  | { type: "CLEAR_CART" };

// Define the context type
interface CartContextType {
  cart: CartState;
  dispatch: React.Dispatch<CartAction>;
}

// Initialize the context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Reducer function
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.payload];
    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.payload);
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
};

// Props for the provider component
interface CartProviderProps {
  children: ReactNode;
}

// Hook to use the cart context
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};


// CartProvider component
export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

