import { Link } from "react-router-dom";
import { useContext } from 'react';
import { ProductContext } from '../context/ProdContext';

export default function Navbar() {
  const { cartitems } = useContext(ProductContext);
  const totalItems = cartitems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white shadow-xl sticky top-0 z-1">
      <div className="flex items-center w-full md:w-auto">
        <Link to={'/'} className="text-3xl font-bold">
            <span className="text-yellow-500">e</span>
            <span className="text-green-500">p</span>
            <span className="text-blue-500">a</span>
            <span className="text-red-500">y</span>
        </Link>

        {/* Search bar dibuat fleksibel dan memiliki margin horizontal di layar besar */}
        <div className="flex-grow mx-4 md:mx-8">
          <div className="flex">
            <input
              className="w-full border border-gray-300 h-8 md:h-10 rounded-l-lg px-2 text-sm focus:outline-none"
              type="text"
              placeholder="Search..."
            />
            {/* Tombol search disembunyikan di layar kecil */}
            <button className="hidden md:block bg-white text-gray-500 px-2 md:px-4 rounded-r-lg border border-gray-300 hover:bg-gray-100 h-8 md:h-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 md:h-5 md:w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-4 md:space-x-6">
        <Link to="/account">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 md:h-8 md:w-8 text-gray-500 hover:text-gray-700 transition"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.121 17.804A10.966 10.966 0 0112 15c2.21 0 4.247.642 5.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </Link>
        <Link to="/checkout" className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 md:h-8 md:w-8 text-gray-500 hover:text-gray-700 transition"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7a1 1 0 00.9 1.5H19m-12 0a1 1 0 11-2 0 1 1 0 012 0zm12 0a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>
          <span className="absolute -top-1 -right-1 md:-top-2 md:-right-2 bg-red-600 text-white text-xs font-bold px-1.5 md:px-2 py-0.5 rounded-full shadow">
            {totalItems}
          </span>
        </Link>
      </div>
    </div>
  );
}