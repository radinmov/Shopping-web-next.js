import { useState, useEffect } from 'react';
import "./Style.css";
import Header from '../../../components/header/page';
import Footer from '../../../components/footer/page';
import Link from 'next/link';

export default function Register() {
  useEffect(() => {
    document.title = 'Register ';
  }, []);

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden h-96 w-full max-w-md">
          <div className="p-8 bg-white flex flex-col justify-center w-full">
            <h2 className="text-2xl font-bold text-gray-700">Create Your Account</h2>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 lg:w-1/4"></span>
              <span className="text-xs text-center text-gray-500 uppercase">Or</span>
              <span className="border-b w-1/5 lg:w-1/4"></span>
            </div>
            <div className="flex-grow"></div>
            <Link 
              className="bg-blue-500 text-white rounded-md font-bold py-3 text-center block mt-4 hover:bg-blue-600 transition" 
              target="__blank" 
              href={"https://t.me/OrderShopingBot"}
            >
              Register with Telegram
            </Link>

            <p className="mt-4 text-sm text-center text-gray-500">
              Already have an account? <a href="/auth/login" className="text-blue-500">Sign In</a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
