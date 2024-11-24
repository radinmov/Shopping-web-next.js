import React, { useState, useEffect } from 'react';
import DropdownFooter from '../dropdownFooter/DropdownFooter';
import Link from 'next/link';

const Footer: React.FC = () => {
  // States to hold user data
  const [totalUsers, setTotalUsers] = useState<number>(0);
  const [onlineUsers, setOnlineUsers] = useState<number>(0);

  // Simulating API call to fetch users data
  useEffect(() => {
    const fetchData = async () => {
      // Simulating API response with setTimeout
      setTimeout(() => {
        setTotalUsers(500); // Replace this with API data when available
        setOnlineUsers(37); // Replace this with API data when available
      }, 1000);
    };
    fetchData();
  }, []);

  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Support Section */}
        <DropdownFooter title="Support">
          <address className="not-italic mb-4">
            TBZ, IRAN <br />
            <Link href="/">
              <div className="hover:underline">Contact Us</div>
            </Link>
          </address>
        </DropdownFooter>

        {/* Account Section */}
        <DropdownFooter title="Account">
          <ul>
            <li className="mb-2">
              <Link href="/profile">
                <div className="hover:underline">My Account</div>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/auth/login">
                <div className="hover:underline">Login</div>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/auth/register">
                <div className="hover:underline">Register</div>
              </Link>
            </li>
          </ul>
        </DropdownFooter>

        {/* Linker Section */}
        <DropdownFooter title="Linker">
          <ul>
            <li className="mb-2">
              <Link href="/auth/login">
                <div className="hover:underline">Login</div>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/auth/register">
                <div className="hover:underline">Register</div>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/profile">
                <div className="hover:underline">Profile</div>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/orders">
                <div className="hover:underline">Orders</div>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/charges">
                <div className="hover:underline">Charges</div>
              </Link>
            </li>
          </ul>
        </DropdownFooter>
      </div>

      {/* Footer Bottom Section */}
      <div className="container mx-auto mt-8 flex flex-col md:flex-row justify-between items-center">
        {/* Copyright */}
        <div className="mb-4 md:mb-0">
          <p>&copy; Copyright ALBORZ, IRAN, TBZ 2024. All rights reserved.</p>
        </div>

        {/* User Statistics */}
        <div className="flex flex-col items-center space-y-2 md:space-y-0 md:flex-row md:space-x-4">
          <p>Total Users: {totalUsers}</p>
          <p>Online Users: {onlineUsers}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
