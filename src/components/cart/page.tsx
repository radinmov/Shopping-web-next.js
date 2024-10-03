import Image from "next/image";
import { useState, useEffect } from "react";

const Home = () => {
  const [Data, SetData] = useState<any[]>([]); // Set type to an array

  useEffect(() => {
    fetch("http://195.248.242.69:5005/user/products", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        SetData(result); // Set the fetched data to the state
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []); // useEffect with an empty dependency array to run once on component mount

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Explore Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Data.map((product, index) => (
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
            <h1 className="mt-4 text-lg font-semibold">{product.name}</h1> {/* Corrected the product name */}
            <p className="mt-2">{product.description}</p> {/* Added product description */}
            <p className="text-red-500 text-sm">${product.price}</p> {/* Corrected the product price */}

            <button className="mt-4 w-full bg-black text-white py-2 rounded-md">
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
