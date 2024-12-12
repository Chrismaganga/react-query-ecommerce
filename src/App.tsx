import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import RouteComponent from "./components/RouteComponent";
import Home from "./components/Home";
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";
import { CartProvider } from "./components/cartContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";



const queryClient = new QueryClient();


const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <Router>
          <div className="font-sans bg-gray-100 min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 py-8">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/product/:id"
                  element={<RouteComponent component={ProductDetail} />}
                />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/about" element={<div>About Us</div>} />
                <Route path="/contact" element={<div>Contact Us</div>} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </QueryClientProvider>
  );
};
export default App;