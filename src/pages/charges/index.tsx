import { useEffect, useState } from "react";
import Footer from "../../components/footer/page";
import Header from "../../components/header/page";

const Charges = () => {
  const [charges, setCharges] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const userId = localStorage.getItem("user_id");

    if (userId) {
      fetch(`http://195.248.242.69:5005/user/charges/${userId}`, {
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
    <>
      <Header />
      <p>hello</p>
      <Footer />

    </>
  );
};

export default Charges;
