// components/ProductList.jsx
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    description: 'Noise-cancelling over-ear headphones.',
    price: 99.99,
    image: '/images/headphones.jpg',
  },
  // Add more products...
];

export default function ProductList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}