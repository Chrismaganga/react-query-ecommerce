import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import { fetchProducts } from "@/FetchApi";

const ProductDetail = ({ id }: { id: string | undefined }) => {
  if (!id) return <div>Product not found</div>;

  const fetchProduct = async () => {
    const { data } = await axios.get(`${fetchProducts}/${id}`);
    return data;
  };

  const { data: product, isLoading, error } = useQuery({
    queryKey: ["product", id],
    queryFn: fetchProduct
  });

  if (isLoading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-center mt-10">Error fetching product</div>;

  return (
    <div className="p-4">
      <Link to="/" className="text-blue-500 underline mb-4 block">Go Back</Link>
      <div className="flex flex-col sm:flex-row">
        <img
          src={product.image}
          alt={product.title}
          className="h-64 mx-auto mb-4 sm:mb-0 sm:mr-6"
        />
        <div>
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-700 mb-4">${product.price}</p>
          <p className="text-gray-600">{product.description}</p>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;
