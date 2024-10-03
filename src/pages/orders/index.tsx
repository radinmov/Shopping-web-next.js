import { useEffect, useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const telegramId = localStorage.getItem("Telegram_ID");

    if (telegramId) {
      fetch(`http://195.248.242.69:5005/user/orders/${telegramId}`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          setOrders(data); // 
        })
        .catch((error) => {
          console.error("Error fetching orders:", error);
          setError("Failed to fetch orders. Please try again.");
        });
    } else {
      setError("No Telegram ID found. Please login again.");
    }
  }, []); 

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Your Orders</h1>
      {error && <p className="text-red-500">{error}</p>}
      <ul>
        {orders.length > 0 ? (
          orders.map((order, index) => (
            <li key={index} className="border p-4 mb-2">
              <p>Order ID: {order.id}</p>
              <p>Order Description: {order.description}</p>
              <p>Order Date: {order.date}</p>
            </li>
          ))
        ) : (
          <p>No orders found.</p>
        )}
      </ul>
    </div>
  );
};

export default Orders;
