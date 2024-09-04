
import Image from "next/image";

interface ProductCardProps {
  title: string;
  price: string;
  image: string;
  isNew?: boolean;
  rating: number;
  reviews: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, image, isNew, rating, reviews }) => {
  return (
    <div className="border rounded-lg shadow-md p-4">
      {isNew && <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs absolute top-2 left-2">NEW</span>}
      <div className="relative w-full h-40">
        <Image src={`/images/${image}`} alt={title} layout="fill" objectFit="cover" className="rounded-md" />
      </div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="text-red-500 text-sm">{price}</p>
      <div className="flex items-center mt-2">
        <span className="text-yellow-400">{'⭐'.repeat(rating)}</span>
        <span className="text-gray-500 ml-2 text-sm">({reviews})</span>
      </div>
      <button className="mt-4 w-full bg-black text-white py-2 rounded-md">Add To Cart</button>
    </div>
  );
};

export default ProductCard;
