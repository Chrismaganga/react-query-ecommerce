import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";


export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 E-Commerce. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};