import React from 'react';
import DropdownFooter from '../dropdownFooter/DropdownFooter';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <DropdownFooter title="Support">
          <address className="not-italic mb-4">
            111 Bijoy sarani, Dhaka, <br />
            <Link href="/contact">
              <div className="hover:underline">Contact Us</div>
            </Link>
          </address>
          <p>+88015-88888-9999</p>
          <p><a href="mailto:exclusive@gmail.com" className="hover:underline">exclusive@gmail.com</a></p>
        </DropdownFooter>
        
        <DropdownFooter title="Account">
          <ul>
            <li className="mb-2">
              <Link href="/account">
                <div className="hover:underline">My Account</div>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/login">
                <div className="hover:underline">Login / Register</div>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/cart">
                <div className="hover:underline">Cart</div>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/wishlist">
                <div className="hover:underline">Wishlist</div>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/shop">
                <div className="hover:underline">Shop</div>
              </Link>
            </li>
          </ul>
        </DropdownFooter>

        <DropdownFooter title="Quick Link">
          <ul>
            <li className="mb-2">
              <Link href="/privacy-policy">
                <div className="hover:underline">Privacy Policy</div>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/terms">
                <div className="hover:underline">Terms Of Use</div>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/faq">
                <div className="hover:underline">FAQ</div>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/contact">
                <div className="hover:underline">Contact</div>
              </Link>
            </li>
          </ul>
        </DropdownFooter>
        
      </div>
      <div className="container mx-auto mt-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p>&copy; Copyright Rimel 2022. All rights reserved</p>
        </div>
        <div className="flex space-x-4">
          <a href="#"><img src="/path-to-qr-code.png" alt="QR Code" className="h-10" /></a>
          <a href="#"><img src="/path-to-google-play.png" alt="Google Play" className="h-10" /></a>
          <a href="#"><img src="/path-to-app-store.png" alt="App Store" className="h-10" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
