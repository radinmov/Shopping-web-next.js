import React, { useEffect, useState } from 'react';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("welcome");

    // Get the user id and token from localStorage
    const userId = localStorage.getItem('id');
    const token = localStorage.getItem('Token');

    // Check if user id and token exist
    if (userId && token) {
      // POST request to fetch user data with token
      fetch(`http://192.168.220.19:3002/user/user_info/${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // Sending token in the Authorization header
        },
      })
        .then(response => {
          
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data =>{ setUserData(data)
        console.log(data);}
        
      )
        .catch(error => setError(error.message));
    } else {
      // setError('No user ID or Token found in localStorage');
    }
  }, []);

  return (
    <div>
      {error && <p>Error: {error}</p>}
      {userData ? (
        <div>
          <h1>{userData.name}</h1>
          <p>Email: {userData.email}</p>
          {/* You can add more user info here */}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default Profile;
