
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import "./Style.css"
import Header from '../../../components/header/page';
import Footer from '../../../components/footer/page';


export default function Login() {
  const [name, SetName] = useState(null);
  const [email, SetEmail] = useState(null);
  const [password, SetPassword] = useState(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // setError('');

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, password }),
      });

      if (response.ok) {

        const data = await response.json();
        console.log('Login successful:', data);
      } else {
        const errorData = await response.json();
      }
    } catch (error) {
      console.error('An error occurred during login:', error);
    }
  };
  useEffect(() => {
    document.title = 'Login ';
  }, []);



  return (
    <>
    <Header />
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-8  bg-white flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-gray-700">Login in your Account</h2>
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

            <button className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm">
              Login
            </button>
          </form>

          <p className="mt-4 text-sm text-center text-gray-500">
            Already have an account? <a href="#" className="text-blue-500">Sign In</a>
          </p>
        </div>
      </div>
    </div>
  <Footer />
  </>
  );
}