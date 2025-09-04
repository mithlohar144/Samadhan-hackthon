// components/ProductCard.jsx
export default function ProductCard({ product }) {
  return (
    <div className="bg-red-400  shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-600">{product.description}</p>
        <div className="mt-2 flex justify-between items-center">
          <span className="text-xl font-bold text-indigo-600">${product.price}</span>
          <button className="bg-indigo-500 text-white px-3 py-1 rounded hover:bg-indigo-600">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}