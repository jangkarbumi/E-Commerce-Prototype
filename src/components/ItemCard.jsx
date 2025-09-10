import { Link } from "react-router-dom";
import { useContext } from 'react';
import { ProductContext } from '../context/ProdContext';

export default function ItemCard({ itemName, seller, place, price, itemImg, product }) {
  const { addToCart, removeCart } = useContext(ProductContext);

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <Link
      to="/item-1"
      className="flex flex-col w-full bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-transform duration-200"
    >
      <img
        className="w-full h-64 object-cover"
        src={itemImg}
        alt={itemName}
      />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold text-gray-800 truncate">
            {itemName || "thing"}
          </h2>
          <div className="flex items-center space-x-2">
            <button
              onClick={(e) => {
                handleClick(e);
                addToCart(product);
              }}
              className="cursor-pointer w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 text-lg font-bold text-gray-700 hover:bg-gray-100 active:scale-95 transition">
              +
            </button>
            <button
              onClick={(e) => {
                handleClick(e);
                removeCart(product);
              }}
              className="cursor-pointer w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 text-lg font-bold text-gray-700 hover:bg-gray-100 active:scale-95 transition">
              −
            </button>
          </div>
        </div>
        <p className="text-base font-semibold text-orange-500">
          {price || "Free"}
        </p>
        <p className="text-sm text-gray-600">{seller || "anonymous"}</p>
        <p className="text-sm text-gray-500">{place || "knowhere"}</p>
      </div>
    </Link>
  );
}