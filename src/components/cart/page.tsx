import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

const Home = () => {
  const [Data, SetData] = useState<any[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    fetch("http://195.248.242.69:5006/user/products")
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
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
        {Data.map((product) => (
          <div key={product.id} className="border rounded-lg shadow-md p-4 relative">
            <div className="relative w-full h-40">
              <Image
                src={`http://195.248.242.69:5006/static/${product.photo_path}`}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <h1 className="mt-4 text-lg font-semibold">{product.name}</h1>
            <p className="mt-2">{product.description}</p>
            <p className="text-red-500 text-sm">${product.price}</p>

            <Link href={"/Product_detail"}>
              <div className="mt-4 w-full bg-black text-white py-2 rounded-md text-center">Details</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
