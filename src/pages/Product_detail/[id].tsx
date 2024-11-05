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

interface Comment {
  id: number;
  name: string;
  message: string;
}

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [username, setUsername] = useState('');
  
  const totalStars = 5;
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`http://188.245.175.0:8000/user/products/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setProduct(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching product details:", error);
          setLoading(false);
        });
    }
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

  const handleCommentSubmit = () => {
    if (username && newComment) {
      setComments([...comments, { id: comments.length + 1, name: username, message: newComment }]);
      setNewComment('');
      setUsername('');
    } else {
      Swal.fire({
        title: 'Missing Information',
        text: 'Please provide both your name and a comment.',
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
            <p className="text-gray-600 text-lg mb-6">{product.description}</p>
            <div className="mb-6">
              <p className="text-2xl text-red-600 font-semibold">${product.price.toFixed(2)}</p>
            </div>

            {/* Rating Section */}
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
            </div>
            
            <div className="border-t border-gray-300 pt-4 mt-6">
              <h3 className="text-lg font-semibold mb-2">You can also add a comment for this product</h3>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border p-2 mb-2 w-full rounded-md"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <textarea
                  placeholder="Write a comment..."
                  className="border p-2 mb-2 w-full rounded-md"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                />
                <button
                  className="bg-green-600 text-white font-semibold py-2 px-4 rounded hover:bg-green-700"
                  onClick={handleCommentSubmit}
                >
                  Submit Comment
                </button>
              </div>
              <div className="mt-4">
                {comments.length > 0 ? (
                  comments.map((comment) => (
                    <div key={comment.id} className="bg-white shadow-md rounded-lg p-4 mb-4">
                      <p className="text-lg font-semibold mb-2">{comment.name}</p>
                      <p className="text-gray-700">{comment.message}</p>
                    </div>
                  ))
                ) : (
                  <p>No comments yet. Be the first to comment!</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;