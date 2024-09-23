import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import "./Style.css"
import Header from '../../../components/header/page';
import Footer from '../../../components/footer/page';
import Swal from 'sweetalert2';

export default function Login() {
  const [phone, SetPhone] = useState<string | null>(null);
  const [Code, SetCode] = useState<string | null>(null);
  
  function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); // Prevent form submission and page refresh
    console.log("hwlo");

    const auth_inputs = [
      { name: "phone", value: phone },
      { name: "Code", value: Code }
    ];

    for (const field of auth_inputs) {
      if (!field.value || field.value.length === 0) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "You must enter something...",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
        return;
      }
    }

    if (phone) {
      var data = JSON.stringify({
        phone_number: phone,
        verify_code: Code,
      });

      fetch("http://192.168.220.14:5005/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        
        let token = result.token;
        if (token) {
          console.log("ok");
          alert("Login success");

          localStorage.setItem("Token", token);
          localStorage.setItem("Phone_Number", result.phone_number);
          localStorage.setItem("Telegram_ID", result.telegram_id);
          localStorage.setItem("Balance", result.balance);
          
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${result.message}`,
            footer: '<a href="#">Why do I have this issue?</a>'
          });
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Try again</a>'
        });
      });
    }
  }

  useEffect(() => {
    document.title = 'Login';
  }, []);

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-8 bg-white flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-700">Login in your Account</h2>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 lg:w-1/4"></span>
              <span className="text-xs text-center text-gray-500 uppercase">Or</span>
              <span className="border-b w-1/5 lg:w-1/4"></span>
            </div>

            <form className="mt-8 space-y-4" onSubmit={handleLogin}>
              <div>
                <label className="block text-gray-700">Your number</label>
                <input
                  onChange={(e) => SetPhone(e.target.value)}
                  type="text"
                  placeholder="Your phone number"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p>{phone}</p>
              </div>
              <div>
                <label className="block text-gray-700">Your verify code</label>
                <input
                  onChange={(e) => SetCode(e.target.value)}
                  type="text"
                  placeholder="Your code"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm">
                Login
              </button>
            </form>

            <p className="mt-4 text-sm text-center text-gray-500">
              Already have an account? <a href="#" className="text-blue-500">Login</a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
