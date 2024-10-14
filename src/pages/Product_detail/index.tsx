import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import './Style.css';


interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  photo_path: string;
}

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query; // Get product ID from the URL
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  // Hardcoded product for demonstration
  const hardcodedProduct: Product = {
    id: "1",
    name: "Nike ACG 'Wolf Tree' Polartec",
    description: "Experience the power and simplicity of the Nike ACG Wolf Tree. The warm insulated fleece jacket keeps you warm even through the roughest conditions.",
    price: 250.00,
    photo_path: "sample-product.jpg", // Ensure this image path is valid
  };

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setProduct(hardcodedProduct);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [id]);

  if (loading) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  if (!product) {
    return <div className="text-center">Product not found.</div>;
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center bg-white p-8 rounded-lg shadow-md">
        {/* Left side: Product image and image list */}
        <div className="flex flex-col items-center w-full lg:w-1/2">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
            {/* Thumbnail Images */}
            <div className="w-16 h-16 bg-gray-200 rounded overflow-hidden">
              <Image
                src=""
                alt={product.name}
                width={100}
                height={100}
                className="object-cover"
              />
            </div>
          </div>
          <div className="relative w-full h-[500px] bg-gray-200 rounded-lg overflow-hidden">
            <Image
              src=""
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Right side: Product details */}
        <div className="w-full lg:w-1/2 lg:pl-12 mt-8 lg:mt-0">
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 text-lg mb-6">
            {product.description}
          </p>

          <div className="mb-6">
            <p className="text-2xl text-red-600 font-semibold">${product.price.toFixed(2)}</p>
          </div>

          {/* Color Options */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Select Color</h3>
            <div className="flex space-x-2">
              {/* Color option buttons */}
              <button className="w-8 h-8 rounded-full bg-blue-700 focus:ring-2 ring-blue-400"></button>
              <button className="w-8 h-8 rounded-full bg-purple-700 focus:ring-2 ring-purple-400"></button>
              <button className="w-8 h-8 rounded-full bg-gray-700 focus:ring-2 ring-gray-400"></button>
            </div>
          </div>

          {/* Size Options */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Select Size</h3>
            <div className="flex space-x-4">
              {["S", "M", "L", "XL", "XXL"].map(size => (
                <button key={size} className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-200">
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="mb-6 flex space-x-4 items-center">
            <input type="number" defaultValue={1} min={1} className="w-16 border border-gray-300 rounded text-center" />
            <button className="bg-black text-white font-semibold py-2 px-6 rounded-md hover:bg-gray-900">
              Add to Cart
            </button>
            <button className="bg-gray-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-gray-700">
              Buy Now
            </button>
          </div>

          {/* Product Details */}
          <div className="border-t border-gray-300 pt-4">
            <h3 className="text-lg font-semibold mb-2">Details</h3>
            <p className="text-gray-600">Shipping, features, and other details...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
