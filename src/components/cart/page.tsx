

import ProductCard from '../../components/productCard/page';

const Home = () => {
  const products = [
    {
      title: "Breed Dry Dog Food",
      price: "$100",
      image: "",
      rating: 4,
      reviews: 35,
    },
    {
      title: "Breed Dry Dog Food",
      price: "$100",
      image: "",
      rating: 4,
      reviews: 35,
    },
    {
      title: "Breed Dry Dog Food",
      price: "$100",
      image: "",
      rating: 4,
      reviews: 35,
    },
    {
      title: "Breed Dry Dog Food",
      price: "$100",
      image: "",
      rating: 4,
      reviews: 35,
    },

    {
      title: "Breed Dry Dog Food",
      price: "$100",
      image: "",
      rating: 4,
      reviews: 35,
    },
    {
      title: "Breed Dry Dog Food",
      price: "$100",
      image: "",
      rating: 4,
      reviews: 35,
    }, {
      title: "Breed Dry Dog Food",
      price: "$100",
      image: "/path/to/image.jpg",
      rating: 4,
      reviews: 35,
    },
    {
      title: "Breed Dry Dog Food",
      price: "$100",
      image: "",
      rating: 4,
      reviews: 35,
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Explore Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
