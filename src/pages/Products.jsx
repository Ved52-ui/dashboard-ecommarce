import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { addToCart } = useCart();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(() => setError('Failed to load products'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="text-center py-20">Loading products...</div>;
  if (error) return <div className="text-red-500 text-center py-20">{error}</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map(product => (
        <div key={product.id} className="bg-white rounded-xl shadow-sm border p-4 flex flex-col">
          <img src={product.image} alt={product.title} className="h-48 w-full object-contain mb-4" />
          <h3 className="font-semibold text-gray-800 text-sm line-clamp-2 mb-2">{product.title}</h3>
          <p className="text-xl font-bold text-gray-900 mb-4">${product.price}</p>
          <button 
            onClick={() => addToCart(product)}
            className="mt-auto w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}