import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import './Style.css';
import Header from "../../components/header/page";
import Footer from "../../components/footer/page";
import { FaStar } from 'react-icons/fa';
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

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState<Comment[]>([]);
  const [userName, setUserName] = useState<string>('');
  const [commentContent, setCommentContent] = useState<string>('');

  const imageBaseUrl = "http://188.245.175.0:8000";

  useEffect(() => {
    if (id) {
      fetch(`http://188.245.175.0:8000/product/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setProduct(data);
          setLoading(false);
          console.log(data);
        })
        .catch((error) => {
          console.error("Error fetching product details:", error);
          setLoading(false);
        });
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      fetch(`http://188.245.175.0:8000/products/${id}/comments`)
        .then((response) => response.json())
        .then((data) => setComments(data))
        .catch((error) => console.error("Error fetching comments:", error));
    }
  }, [id]);

  useEffect(() => {
    document.title = 'Product Details';
  }, []);

  const handlePostComment = async () => {
    if (!userName || !commentContent) {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Both fields are required!',
      });
      return;
    }

    const newComment = {
      user_name: userName,
      content: commentContent,
    };

    try {
      const response = await fetch(`http://188.245.175.0:8000/products/${id}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newComment),
      });

      if (response.ok) {
        const comment = await response.json();
        setComments((prevComments) => [...prevComments, comment]);
        setUserName('');
        setCommentContent('');

        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Your comment has been posted.',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'Failed to post the comment. Try again.',
        });
      }
    } catch (error) {
      console.error("Error posting comment:", error);
      Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Network error. Please try again later.',
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
          <div className="flex flex-col items-center w-full lg:w-1/2">
            <div className="relative w-full h-[500px] bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src={`${imageBaseUrl}/static/${product.photo_path}`}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 lg:pl-12 mt-8 lg:mt-0">
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-red-600 text-lg mb-6 font-bold">{product.price}$</p>
            <p className="text-gray-600 font-bold text-lg mb-6">{product.description}</p>

            {/* Conditionally show options if available */}
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

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Customer Rating</h3>
              <div className="flex items-center space-x-1 gap-4">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    size={24}
                    color={index < (product.rate || 0) ? "#ffc107" : "#e4e5e9"}
                  />
                ))}
                <p className="text-lg ml-4">{product.rate ? `${product.rate} / 5` : null}</p>
              </div>
            </div>

            <div className="mt-4">
              <h1 className="font-bold">You can also see users Comments</h1>
              {comments.length > 0 ? (
                comments.map((comment) => (
                  <div key={comment.id} className="bg-white shadow-md rounded-lg p-4 mb-4">
                    <p className="text-lg font-semibold mb-2">{comment.user_name}</p>
                    <p className="text-gray-700">{comment.content}</p>
                  </div>
                ))
              ) : (
                <p>No comments yet. Be the first to comment!</p>
              )}
            </div>

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
                send  Comment
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
