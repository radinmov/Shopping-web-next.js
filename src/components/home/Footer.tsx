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
              <Link href="/auth/login">
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
          <a href="#"><img src="" alt="QR Code" className="h-10" /></a>
          <a href="#"><img src="data:image/png;base64,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" alt="Google Play" className="h-10" /></a>
          <a href="#"><img src="" alt="App Store" className="h-10" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
