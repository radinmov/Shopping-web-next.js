import { useEffect, useState } from "react";
import Header from "../../components/header/page";
import Footer from "../../components/footer/page";

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
    <>
      <Header />
      <p>hello</p>
      <Footer />
    </>
  );
};

export default Orders;
