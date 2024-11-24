import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCreditCard, faShoppingCart, faHome, faLitecoinSign } from "@fortawesome/free-solid-svg-icons";
import "./Style.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the token exists in localStorage
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token); // Convert token to a boolean value
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className="flex justify-between items-center bg-white px-10 py-4 shadow-md">
        <div className="text-xl font-bold">
          <Link href="/">
            <Image
              src="/vimba.jpeg"
              alt="Logo"
              width={200}
              height={20}
              className="rounded-full"
            />
          </Link>
        </div>

        {/* Hamburger Menu Toggle */}
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
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faHome} />
              <p>Home</p>
            </div>
          </Link>
          <Link href="/auth/login" passHref>
            <div className="flex items-center space-x-2 py-2 hover:bg-gray-100 rounded-md">
              <FontAwesomeIcon icon={faLitecoinSign} />
              <p>Login</p>
            </div>
          </Link>
          <Link href="/auth/register" passHref>
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faUser} />
              <p>Profile</p>
            </div>
          </Link>

          {/* Conditionally render Orders and Charges based on isAuthenticated */}
          {isAuthenticated && (
            <>
              <Link href="/orders" passHref>
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faShoppingCart} />
                  <p>Orders</p>
                </div>
              </Link>
              <Link href="/charges" passHref>
                <div className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faCreditCard} />
                  <p>Charges</p>
                </div>
              </Link>
            </>
          )}
        </nav>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-white px-5 py-4 space-y-4">
          <Link href="/" passHref>
            <div className="flex items-center space-x-2 py-2 hover:bg-gray-100 rounded-md">
              <FontAwesomeIcon icon={faHome} />
              <p>Home</p>
            </div>
          </Link>
          <Link href="/auth/login" passHref>
            <div className="flex items-center space-x-2 py-2 hover:bg-gray-100 rounded-md">
              <FontAwesomeIcon icon={faLitecoinSign} />
              <p>Login</p>
            </div>
          </Link>
          <Link href="/auth/register" passHref>
            <div className="flex items-center space-x-2 py-2 hover:bg-gray-100 rounded-md">
              <FontAwesomeIcon icon={faUser} />
              <p>Profile</p>
            </div>
          </Link>

          {/* Conditionally render Orders and Charges for mobile navigation */}
          {isAuthenticated && (
            <>
              <Link href="/orders" passHref>
                <div className="flex items-center space-x-2 py-2 hover:bg-gray-100 rounded-md">
                  <FontAwesomeIcon icon={faShoppingCart} />
                  <p>Orders</p>
                </div>
              </Link>
              <Link href="/charges" passHref>
                <div className="flex items-center space-x-2 py-2 hover:bg-gray-100 rounded-md">
                  <FontAwesomeIcon icon={faCreditCard} />
                  <p>Charges</p>
                </div>
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
}
