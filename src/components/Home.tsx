import { fetchProducts } from '@/FetchApi';
import { useQuery } from '@tanstack/react-query';
import {Link} from 'react-router-dom'

const Home = () => {
    const { data: products, isLoading, error } = useQuery({
        queryKey: ["products"],
        queryFn: fetchProducts
    });
  
    if (isLoading) return <div className="text-center mt-10">Loading...</div>;
    if (error) return <div className="text-center mt-10">Error fetching products</div>;
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {products?.map((product: any) => (
          <div
            key={product.id}
            className="border p-4 rounded-lg shadow hover:shadow-lg transition">
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.title}
                className="h-40 mx-auto mb-4"
              />
              <h2 className="text-lg font-semibold truncate">{product.title}</h2>
              <p className="text-gray-700 mt-2">${product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    );
  };
  export default Home;