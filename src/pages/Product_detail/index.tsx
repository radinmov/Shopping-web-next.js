import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import './Style.css';
import Header from "../../components/header/page";
import Footer from "../../components/footer/page";
import { FaStar } from 'react-icons/fa';
import Swal from 'sweetalert2';
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  photo_path: string;
}

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const totalStars = 5;
  
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  
  const hardcodedProduct: Product = {
    id: "1",
    name: "Nike ACG 'Wolf Tree' Polartec",
    description: "Experience the power and simplicity of the Nike ACG Wolf Tree. The warm insulated fleece jacket keeps you warm even through the roughest conditions.",
    price: 250.00,
    photo_path: "https://img.freepik.com/free-psd/young-man-white-hoodie-isolated-white-background_1142-60142.jpg",
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setProduct(hardcodedProduct);
      setLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, [id]);

  useEffect(() => {
    document.title = 'Product Details';
  }, []);

  const handleStarClick = (index: number) => {
    setSelectedRating(index + 1); 
  };

  const handleSendRating = () => {
    if (selectedRating) {
      Swal.fire({
        title: 'Rating Submitted',
        text: `You rated this ${selectedRating} out of ${totalStars} stars!`,
        icon: 'success',
        confirmButtonText: 'OK'
      });
    } else {
      Swal.fire({
        title: 'No Rating Selected',
        text: 'Please select a rating before sending.',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
    }
  };

  if (loading) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  if (!product) {
    return <div className="text-center">Product not found.</div>;
  }

  return (
    <>
      <Header />
      <div className="p-8 bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center bg-white p-8 rounded-lg shadow-md">
          <div className="flex flex-col items-center w-full lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
              <div className="w-16 h-16 bg-gray-200 rounded overflow-hidden">
                <Image
                  src={product.photo_path}
                  alt={product.name}
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="relative w-full h-[500px] bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src={product.photo_path}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 lg:pl-12 mt-8 lg:mt-0">
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 text-lg mb-6">
              {product.description}
            </p>

            <div className="mb-6">
              <p className="text-2xl text-red-600 font-semibold">${product.price.toFixed(2)}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Customer Rating</h3>
              <div className="flex items-center space-x-1 gap-4">
                {[...Array(totalStars)].map((_, index) => (
                  <FaStar
                    key={index}
                    size={24}
                    color={index < (selectedRating || 0) ? "#ffc107" : "#e4e5e9"}
                    onClick={() => handleStarClick(index)}
                    style={{ cursor: "pointer" }}
                  />
                ))}
                <button
                  className="ml-4 bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700"
                  onClick={handleSendRating}
                >
                  Send Rating
                </button>
              </div>
              {selectedRating && <p className="mt-2 text-gray-600">You rated this {selectedRating} out of {totalStars} stars</p>}
            </div>

            <div className="mb-6 flex space-x-4 items-center">
              <Link href={"https://t.me/OrderShopingBot"}  target="__blanck" className="bg-black text-white font-semibold py-2 px-6 rounded-md hover:bg-gray-900">
                Buy with Bot
              </Link>
            </div>

            <div className="border-t border-gray-300 pt-4">
              <h3 className="text-lg font-semibold mb-2">Details</h3>
              <p className="text-gray-600">Shipping, features, and other details...</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
