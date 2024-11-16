import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

const Home = () => {
  const [Data, SetData] = useState<any[]>([]); // Initialize as an empty array
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    fetch("http://188.245.175.0:8000/user/products")
      .then((response) => response.json())
      .then((result) => {
        SetData(result); 
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  if (!isMounted) {
    return null; 
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Explore Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Ensure Data is an array before calling map */}
        {Array.isArray(Data) && Data.length > 0 ? (
          Data.map((product) => (
            <div key={product.id} className="border rounded-lg shadow-md p-4 relative">
              <div className="relative w-full h-40">
                <Image
                  src={`http://188.245.175.0:8000/static/${product.photo_path}`}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <h1 className="mt-4 text-lg font-semibold">{product.name}</h1>
              <p className="mt-2">{product.description}</p>
              <p className="text-red-500 text-sm">${product.price}</p>

              <Link href={`/Product_detail/${product.id}`}>
                <div className="mt-4 w-full bg-black text-white py-2 rounded-md text-center">Details</div>
              </Link>
            </div>
          ))
        ) : (
          <p>No products available.</p>  // Display a message when there are no products
        )}
      </div>
    </div>
  );
};

export default Home;
