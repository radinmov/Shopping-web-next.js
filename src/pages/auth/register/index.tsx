
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import "./Style.css"
import Header from '../../../components/header/page';
import Footer from '../../../components/footer/page';
import Link from 'next/link';


export default function Register() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-8  bg-white flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-700">Create Your Account</h2>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 lg:w-1/4"></span>
              <span className="text-xs text-center text-gray-500 uppercase">Or</span>
              <span className="border-b w-1/5 lg:w-1/4"></span>
            </div>

              <Link className='bg-blue-400 rounded-md font-bold' target='__blanck' href={"https://t.me/OrderShopingBot"}>Register with telegram</Link>

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