import React, { useState } from 'react';
import Link from 'next/link';
import './Style.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      
      <div className="flex justify-between items-center bg-black text-white px-5 py-2 text-sm">
        <div>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <a href="#" className="font-bold ml-2 underline">Shop Now</a>
        </div>
      </div>


      <div className="flex justify-between items-center bg-white px-10 py-4">
        <div className="text-xl font-bold">
          <Link href="/">
            <div>Exclusive</div>
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">

            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        
        <nav className="hidden md:flex space-x-8 items-center">
          <Link href="/" passHref>
            <div className="text-black font-semibold underline">Home</div>
          </Link>
          <Link href="/contact" passHref>
            <div className="text-gray-600 hover:text-black">Contact</div>
          </Link>
          <Link href="/about" passHref>
            <div className="text-gray-600 hover:text-black">About</div>
          </Link>
          <Link href="/auth/login" passHref>
            <div className="text-gray-600 hover:text-black">Account</div>
          </Link>
        </nav>

        
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="border rounded-full px-4 py-2 text-gray-600 focus:outline-none focus:border-black w-64"
            />
          </div>
        </div>
      </div>

      
      {menuOpen && (
        <div className="md:hidden bg-white px-10 py-4">
          <Link href="/" passHref>
            <div className="block py-2 text-black font-semibold underline">Home</div>
          </Link>
          <Link href="/contact" passHref>
            <div className="block py-2 text-gray-600 hover:text-black">Contact</div>
          </Link>
          <Link href="/about" passHref>
            <div className="block py-2 text-gray-600 hover:text-black">About</div>
          </Link>
          <Link href="/auth/login" passHref>
            <div className="block py-2 text-gray-600 hover:text-black">Account</div>
          </Link>
          <div className="relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="border rounded-full px-4 py-2 text-gray-600 focus:outline-none focus:border-black w-64"
            />
          </div>
        </div>
      )}
    </div>
  );
}
