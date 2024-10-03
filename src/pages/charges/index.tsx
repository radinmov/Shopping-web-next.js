import { useEffect, useState } from "react";

const Charges = () => {
  const [charges, setCharges] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const userId = localStorage.getItem("user_id");

    if (userId) {
      fetch(`http://192.248.242.69:5005/user/charges/${userId}`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          setCharges(data);
        })
        .catch((error) => {
          console.error("Error fetching charges:", error);
          setError("Failed to fetch charges. Please try again.");
        });
    } else {
      setError("No user ID found. Please login again.");
    }
  }, []); 

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Your Charges</h1>
      {error && <p className="text-red-500">{error}</p>}
      <ul>
        {charges.length > 0 ? (
          charges.map((charge, index) => (
            <li key={index} className="border p-4 mb-2">
              <p>Charge ID: {charge.id}</p>
              <p>Amount: {charge.amount}</p>
              <p>Date: {charge.date}</p>
            </li>
          ))
        ) : (
          <p>No charges found.</p>
        )}
      </ul>
    </div>
  );
};

export default Charges;
