// src/App.jsx
import ProductList from './components/ProductList';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-indigo-700">Our Products</h1>
      <ProductList />
    </div>
  );
}