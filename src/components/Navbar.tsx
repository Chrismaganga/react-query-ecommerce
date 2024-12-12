import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <nav className="bg-blue-500 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">E-Commerce</Link>
          <div className="space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>
      </nav>
    );
  };
  export default Navbar;