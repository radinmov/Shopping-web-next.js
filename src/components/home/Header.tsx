// components/Header.tsx

import React, { useState } from 'react';
import Link from 'next/link';
// import { FiSearch, FiMenu, FiX } from 'react-icons/fi'; // افزودن آیکون‌ها برای همبرگر و بستن منو

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // مدیریت وضعیت نمایش منو

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-white px-10 py-4 shadow-md">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold">Exclusive</div>

        {/* دکمه همبرگر برای موبایل */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {/* {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />} */}
          </button>
        </div>

        {/* منوی ناوبری */}
        <nav className={`md:flex space-x-8 items-center ${menuOpen ? 'block' : 'hidden'} md:block`}>
          <Link href="/" passHref>
            <p className="text-black font-semibold underline">Home</p>
          </Link>
          <Link href="/contact" passHref>
            <p className="text-gray-600 hover:text-black">Contact</p>
          </Link>
          <Link href="/about" passHref>
            <p className="text-gray-600 hover:text-black">About</p>
          </Link>
          <Link href="/signup" passHref>
            <p className="text-gray-600 hover:text-black">Sign Up</p>
          </Link>

          <Link href="/login" passHref>
            <p className="text-gray-600 hover:text-black">login</p>
          </Link>
        </nav>

        {/* فیلد جستجو */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="border rounded-full px-4 py-2 text-gray-600 focus:outline-none focus:border-black w-64"
            />
            <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>
      </div>

      {/* نمایش منو در حالت موبایل */}
      {menuOpen && (
        <div className="md:hidden mt-4">
          <Link href="/" passHref>
            <p className="block py-2 text-black font-semibold underline">Home</p>
          </Link>
          <Link href="/contact" passHref>
            <p className="block py-2 text-gray-600 hover:text-black">Contact</p>
          </Link>
          <Link href="/about" passHref>
            <p className="block py-2 text-gray-600 hover:text-black">About</p>
          </Link>
          <Link href="/signup" passHref>
            <p className="block py-2 text-gray-600 hover:text-black">Sign Up</p>
          </Link>
        </div>
      )}
    </div>
  );
}
