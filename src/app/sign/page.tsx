'use client'
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';
import "./Style.css"

export default function Login() {
  const [name, SetName] = useState(null)
  const [email, SetEmail] = useState(null)
  const [password, SetPassword] = useState(null)


  useEffect(() => {
    document.title = 'SignUp';
  }, []);



  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Section */}
        <div className="bg-blue-900 text-white p-8 md:w-1/2">
          <div className="flex flex-col h-full justify-center">     
            <div className="mt-8">

              <img 
                src="https://media.licdn.com/dms/image/C4D0BAQGCH_ZPiFqWHQ/company-logo_200_200/0/1630524585440?e=2147483647&v=beta&t=p8lWC0f2ui5U2TC1KJVNtfnaZMKFxCbfoQjSGr0c1UI" 

              />
            </div>
          </div>
        </div>
        <div className="p-8 md:w-1/2 bg-white flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-700">Create Your Account</h2>
          
          <div className="mt-6">
            <button className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-lg text-sm text-gray-600">
              {/* <img src="/google-icon.svg" alt="Google" className="w-5 h-5 mr-2" /> */}
              Sign Up with Google
            </button>
          </div>
          
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 lg:w-1/4"></span>
            <span className="text-xs text-center text-gray-500 uppercase">Or</span>
            <span className="border-b w-1/5 lg:w-1/4"></span>
          </div>

          <form className="mt-8 space-y-4">
            <div>
              <label className="block text-gray-700">Your Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700">Your Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label className="ml-2 text-sm text-gray-600">
                I agree to the <a href="#" className="text-blue-500">Terms & Conditions</a>
              </label>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm">
              Register
            </button>
          </form>

          <p className="mt-4 text-sm text-center text-gray-500">
            Already have an account? <a href="#" className="text-blue-500">Sign In</a>
          </p>
        </div>
      </div>
    </div>
  );
}