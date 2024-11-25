import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import Header from "../../components/header/page";
import Footer from "../../components/footer/page";
import { FaStar } from "react-icons/fa";
import Swal from "sweetalert2";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  photo_path: string;
  rate: number;
  options?: {
    color: string;
    size: string;
  };
}

interface Comment {
  id: number;
  user_name: string;
  content: string;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://188.245.175.0:8000";

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState<Comment[]>([]);
  const [userName, setUserName] = useState<string>("");
  const [commentContent, setCommentContent] = useState<string>("");

  useEffect(() => {
    if (id) {
      fetch(`${API_BASE_URL}/product/${id}`)
        .then(async (response) => {
          if (response.ok) {
            const data = await response.json();
            setProduct(data);
          } else {
            console.error("Error fetching product:", await response.text());
            setProduct(null);
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching product details:", error);
          setLoading(false);
        });
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      fetch(`${API_BASE_URL}/products/${id}/comments`)
        .then(async (response) => {
          if (response.ok) {
            const data = await response.json();
            setComments(data);
          } else {
            console.error("Error fetching comments:", await response.text());
            setComments([]);
          }
        })
        .catch((error) => {
          console.error("Error fetching comments:", error);
        });
    }
  }, [id]);

  const handlePostComment = async () => {
    if (!userName || !commentContent) {
      Swal.fire({
        icon: "warning",
        title: "Missing Information",
        text: "Both fields are required!",
      });
      return;
    }

    const newComment = {
      user_name: userName,
      content: commentContent,
    };

    try {
      const response = await fetch(`${API_BASE_URL}/products/${id}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newComment),
      });

      if (response.ok) {
        const comment = await response.json();
        setComments((prevComments) => [...prevComments, comment]);
        setUserName("");
        setCommentContent("");

        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Your comment has been posted.",
        });

        // Refresh the page after posting the comment
        window.location.reload();  // Refresh the page to show the new comment
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to post the comment. Try again.",
        });
      }
    } catch (error) {
      console.error("Error posting comment:", error);
      Swal.fire({
        icon: "error",
        title: "Network Error",
        text: "Please try again later.",
      });
    }
  };

  if (loading) {
    return <div className="text-center font-bold text-lg">Loading...</div>;
  }

  if (!product) {
    return <div className="text-center">Product not found.</div>;
  }

  return (
    <>
      <Header />
      <div className="p-8 bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center bg-white p-8 rounded-lg shadow-md">
          {/* Product Image */}
          <div className="flex flex-col items-center w-full lg:w-1/2">
            <div className="relative w-full h-[500px] bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src={
                  product.photo_path
                    ? `${API_BASE_URL}/static${
                        product.photo_path.startsWith("/")
                          ? product.photo_path
                          : `/${product.photo_path}`
                      }`
                    : "/default-image.jpg"
                }
                alt={product.name}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full lg:w-1/2 lg:pl-12 mt-8 lg:mt-0">
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-red-600 text-lg mb-6 font-bold">{product.price}$</p>
            <p className="text-gray-600 font-bold text-lg mb-6">
              {product.description}
            </p>

            {/* Product Options */}
            {product.options && (product.options.color || product.options.size) && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold">Options</h3>
                {product.options.color && (
                  <p style={{ color: product.options.color }}>
                    Color: {product.options.color}
                  </p>
                )}
                {product.options.size && <p>Size: {product.options.size}</p>}
              </div>
            )}

            {/* Product Rating */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Customer Rating</h3>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    size={24}
                    color={index < (product.rate || 0) ? "#ffc107" : "#e4e5e9"}
                  />
                ))}
                <p className="text-lg ml-4">
                  {product.rate ? `${product.rate} / 5` : null}
                </p>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-4">Comments</h3>
              <div
                className="max-h-[300px] overflow-y-auto w-full border border-gray-300 rounded-lg p-4 bg-gray-100"
                style={{ height: "300px" }}
              >
                {comments.length > 0 ? (
                  comments.map((comment) => (
                    <div
                      key={comment.id}
                      className="bg-white shadow-md rounded-lg p-4 mb-4"
                    >
                      <p className="text-lg font-semibold mb-2">
                        {comment.user_name}
                      </p>
                      <p className="text-gray-700">{comment.content}</p>
                    </div>
                  ))
                ) : (
                  <p>No comments yet. Be the first to comment!</p>
                )}
              </div>
            </div>

            {/* Add Comment */}
            <div className="mt-8">
              <h2 className="font-bold text-xl mb-4">Leave a Comment</h2>
              <input
                type="text"
                placeholder="Your Name"
                className="p-2 mb-4 border border-gray-300 rounded-lg w-full"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <textarea
                placeholder="Your Comment"
                className="p-2 mb-4 border border-gray-300 rounded-lg w-full"
                value={commentContent}
                onChange={(e) => setCommentContent(e.target.value)}
              />
              <button
                className="bg-blue-500 text-white px-6 py-2 rounded-lg"
                onClick={handlePostComment}
              >
                Send Comment
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
