import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faCreditCard, faShoppingCart, faHome } from '@fortawesome/free-solid-svg-icons';

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
            <FontAwesomeIcon icon={faHome} />
          </Link>
          {/* <Link href="/auth/login" passHref>
            <div className="text-gray-600 hover:text-black">Login</div>
          </Link> */}
          <Link href="/auth/register" passHref>
            <FontAwesomeIcon icon={faUser} />
          </Link>
          <Link href="/orders" passHref>
            <FontAwesomeIcon icon={faShoppingCart} />
          </Link>
          <Link href="/charges" passHref>
            <FontAwesomeIcon icon={faCreditCard} />
          </Link>
        </nav>
      </div>


      {menuOpen && (
        <div className="md:hidden bg-white px-10 py-4">
          <Link href="/" passHref>
            <FontAwesomeIcon icon={faHome} />
          </Link>
          <Link href="/auth/register" passHref>
            <FontAwesomeIcon icon={faUser} />
          </Link>
          <Link href="/orders" passHref>
            <FontAwesomeIcon icon={faShoppingCart} />
          </Link>
          <Link href="/charges" passHref>
            <FontAwesomeIcon icon={faCreditCard} />
          </Link>
          <Link href="/auth/register" passHref>
            <div className="block py-2 text-gray-600 hover:text-black">Profile</div>
          </Link>
          {/* <div className="relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="border rounded-full px-4 py-2 text-gray-600 focus:outline-none focus:border-black w-64"
            />
          </div> */}
        </div>
      )}
    </div>
  );
}
