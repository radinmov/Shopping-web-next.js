import { useEffect, useState } from "react";
import Header from "../../components/header/page";
import Footer from "../../components/footer/page";

const Orders = () => {
  const [orders, setOrders] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const telegramId = localStorage.getItem("Telegram_ID");

    if (telegramId) {
      fetch(`http://195.248.242.69:5005/user/orders/${telegramId}`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          setOrders(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching orders:", error);
          setError("Failed to fetch orders. Please try again.");
          setLoading(false);
        });
    } else {
      setError("No Telegram ID found. Please login again.");
      setLoading(false);
    }
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
            <ul>
              {orders.map((order, index) => (
                <li key={index}>
                  <p>Order ID: {order.id}</p>
                  <p>Product: {order.productName}</p>
                  <p>Status: {order.status}</p>
                </li>
              ))}
            </ul>
            
            <div className="p-8">
              <h1 className="text-3xl font-bold mb-6">Explore Our Products</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {orders.map((product, index) => (
                  <div key={index} className="border rounded-lg shadow-md p-4 relative">
                    <div className="relative w-full h-40">
                      {/* <Image
                        src={`http://192.168.220.14:5005/uploaded_file/${product.photo_path}`} 
                        alt={product.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                      /> */}
                    </div>
                    <h1 className="mt-4 text-lg font-semibold">{product.productName}</h1>
                    <p className="mt-2">{product.description}</p>
                    <p className="text-red-500 text-sm">${product.price}</p>

                    <button className="mt-4 w-full bg-black text-white py-2 rounded-md">
                      Add To Cart
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <p>No Orders Up To Now .</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Orders;
