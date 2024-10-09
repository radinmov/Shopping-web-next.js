// pages/product/[id].tsx
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  photo_path: string; // Adjust according to your API response
}

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query; // Get product ID from the URL
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      setLoading(true);
      // Fetch product details from the backend
      fetch(`http://195.248.242.69:5006/user/products/${id}`, {
        method: "GET",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((result) => {
          console.log(result);
          setProduct(result);
        })
        .catch((error) => {
          console.error("Error fetching product details:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>; // Show loading state while fetching
  }

  if (!product) {
    return <div>Product not found.</div>; // Handle case where product is not found
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <div className="relative w-full h-64 mb-4">
        <Image
          src={`http://195.248.242.69:5005/uploaded_file/${product.photo_path}`}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <p className="text-lg mb-4">{product.description}</p>
      <p className="text-red-500 text-xl">${product.price}</p>
    </div>
  );
};

export default ProductDetail;
