import { useEffect, useState } from "react";
import Header from "../../components/header/page";
import Footer from "../../components/footer/page";
import Swal from 'sweetalert2';

const Orders = () => {
  const [orders, setOrders] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const token = localStorage.getItem("Token");
    const telegramId = localStorage.getItem("Telegram_ID");

    if (!token) {
      Swal.fire({
        icon: "error",
        title: "Session Expired",
        text: "Please log in again.",
      });
      setError("No token found.");
      setLoading(false);
      return;
    }

    if (!telegramId) {
      Swal.fire({
        icon: "error",
        title: "Login Required",
        text: "Please log in to view your orders.",
      });
      setError("No Telegram ID found.");
      setLoading(false);
      return;
    }

    fetch(`http://188.245.175.0:8000/user/orders/${telegramId}`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error fetching orders.");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        
        setOrders(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
        setError("Failed to fetch orders. Please try again.");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    document.title = 'Orders';
  }, []);

  return (
    <>
      <Header />
      <div className="orders-container">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : orders.length > 0 ? (
          <>
            <div className="p-8">
              <h1 className="text-3xl font-bold mb-6">Explore Our Products</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {orders.map((product, index) => (
                  <div key={index} className="border rounded-lg shadow-md p-4 relative">
                    {/* <h1 className="mt-4 text-lg font-semibold">{product.}</h1> */}
                    <p className="mt-2">color :{product.color}</p>
                    <p className="mt-2">url :{product.url}</p>
                    <p className="mt-2">order_number :{product.order_id}</p>
                    <p className="text-red-500 text-sm">size :{product.size}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <p>No orders available at the moment.</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Orders;
