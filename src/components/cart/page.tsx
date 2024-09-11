import Image from "next/image";
import { useState } from "react";

const Home = () => {
  const [Data , SetData] =useState([])

  fetch("http://192.168.220.12:5000/login", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      
      SetData(result)
    })
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Explore Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Data.map((product, index) => (
          <div key={index} className="border rounded-lg shadow-md p-4 relative">
            <div className="relative w-full h-40">
                <Image
                  src={`192.168.220.12:5000/${Data.photo_path}`}
                  alt={Data.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
            </div>
            <h1 className="mt-4 text-lg font-semibold">{Data.description}</h1>
            <h3 className="mt-4 text-lg font-semibold">{Data.name}</h3>
            <p className="text-red-500 text-sm">{Data.price}</p>

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
