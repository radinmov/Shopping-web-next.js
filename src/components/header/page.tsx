import React from 'react';
import "./Style.css"

export default function Header (){
  return (
    <div>
      
      <div className="flex justify-between items-center bg-black text-white px-5 py-2 text-sm">
        <div>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <a href="#" className="font-bold ml-2 underline">ShopNow</a>
        </div>
        <div className="flex items-center">
          English
          <span className="ml-1 text-xs">▼</span>
        </div>
      </div>


      <div className="flex justify-between items-center bg-white px-10 py-4">
        <div className="text-xl font-bold">Exclusive</div>
        
        <nav className="flex space-x-8">
          <a href="/" className="text-black font-semibold underline">Home</a>
          <a href="#" className="text-gray-600 hover:text-black">Contact</a>
          <a href="#" className="text-gray-600 hover:text-black">About</a>
          <a href="/auth/login" className="text-gray-600 hover:text-black">Account</a>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="border rounded-full px-4 py-2 text-gray-600 focus:outline-none focus:border-black w-64"
            />
           </div>
          </div>
        
      </div>
    </div>
  );
};


