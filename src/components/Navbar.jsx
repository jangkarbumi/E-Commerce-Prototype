import { Link } from "react-router-dom";
import { useContext } from 'react'; 
import { ProductContext } from '../context/ProdContext'; 

export default function Navbar() {
  const { cartitems } = useContext(ProductContext);

  const totalItems = cartitems.reduce((total, item) => total + item.quantity, 0);

  return (
    // Menggunakan `px-4` untuk padding yang lebih kecil di mobile
    <div className="flex items-center justify-between px-4 py-3 bg-white shadow-xl sticky top-0 z-1">
      {/* Logo hanya ditampilkan di layar besar */}
      <Link to={'/'} className="hidden md:block text-5xl font-bold text-white">
        <span className="text-yellow-500">e</span>
        <span className="text-green-500">p</span>
        <span className="text-blue-500">a</span>
        <span className="text-red-500">y</span>
      </Link>
      
      {/* Search bar hanya muncul di layar yang lebih besar */}
      <div className="flex-grow max-w-2xl mx-8 hidden md:flex">
        <input
          className="flex-grow border border-gray-300 h-10 rounded-l-lg px-4 focus:outline-none"
          type="text"
          placeholder="What Are You Want to Buy?"
        />
        <button className="bg-white text-gray-500 px-4 rounded-r-lg border border-gray-300 hover:bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
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

      {/* Kontainer ikon dan logo mobile */}
      <div className="flex items-center space-x-6 w-full md:w-auto justify-between">
        {/* Logo mobile yang hanya muncul di layar kecil */}
        <Link to={'/'} className="md:hidden text-4xl font-bold">
            <span className="text-yellow-500">e</span>
            <span className="text-green-500">p</span>
            <span className="text-blue-500">a</span>
            <span className="text-red-500">y</span>
        </Link>
        
        {/* Kontainer untuk ikon akun dan keranjang */}
        <div className="flex items-center space-x-6">
          <Link to="/account">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-500 hover:text-gray-700 transition"
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
              className="h-8 w-8 text-gray-500 hover:text-gray-700 transition"
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
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow">
              {totalItems}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}