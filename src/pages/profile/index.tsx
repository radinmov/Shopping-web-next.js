import React, { useEffect, useState } from 'react';
import "./Style.css";
import Header from '../../components/header/page';
import Footer from '../../components/footer/page';

interface UserData {
  id: number;
  balance: number;
  phone_number: string;
  telegram_id: string;
}

const Profile = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("Welcome");
    const userId = localStorage.getItem('id');
    const token = localStorage.getItem('Token');

    if (userId && token) {
      fetch(`http://188.245.175.0:8000/user/user_info/${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, 
        },
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setUserData(data);
          console.log(data); 
        })
        .catch(error => setError(error.message));
    } else {
      setError('No user ID or Token found in localStorage');
    }
  }, []);

  return (
    <>
      <Header /> 
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="sm:flex sm:items-center px-6 py-4">
            <div className="sm:w-1/4 text-center mb-4 sm:mb-0">
              <h3 className="text-lg font-bold text-gray-700">Welcome to your profile </h3>
            </div>
            <div className="sm:w-3/4 sm:ml-6">
              <form className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-gray-600">ID</label>
                  <div className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    {userData ? userData.id : 'Loading...'}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-600">Balance</label>
                  <div className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    {userData ? `${userData.balance}$` : 'Loading...'}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-600">Phone Number</label>
                  <div className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    {userData ? `+${userData.phone_number}` : 'Loading...'}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-600">Telegram ID</label>
                  <div className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    {userData ? userData.telegram_id : 'Loading...'}
                  </div>
                </div>
              </form>

              {error && <p className="text-red-500">{error}</p>}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
