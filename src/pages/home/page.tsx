import React from 'react';

export default function Home (){
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-8 flex items-center justify-between">
          {/* Sidebar */}
          <aside className="w-1/4">
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-blue-500">Woman's Fashion</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500">Men's Fashion</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500">Electronics</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500">Home & Lifestyle</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500">Medicine</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500">Sports & Outdoor</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500">Baby & Toys</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500">Groceries & Pets</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-500">Health & Beauty</a></li>
            </ul>
          </aside>

          {/* Banner */}
          <div className="w-3/4">
            <div className="bg-black text-white p-8 rounded-lg flex items-center justify-between">
              <div>
                <h2 className="text-4xl font-bold">Up to 10% off Voucher</h2>
                <p className="mt-4">Shop Now</p>
              </div>
              <div>
                <img src="/images/iphone-banner.png" alt="iPhone 14 Series" className="w-48" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flash Sales */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Flash Sales</h2>
        <div className="grid grid-cols-5 gap-4">
          {/* Sample Product */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img src="/images/product-1.png" alt="Product" className="w-full h-48 object-cover rounded-lg" />
            <h3 className="text-lg font-semibold text-gray-800 mt-4">HAVIT HV-G92 Gamepad</h3>
            <p className="text-gray-600">$120 <span className="line-through">$160</span></p>
            <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg">Add to Cart</button>
          </div>
          {/* Add more products similarly */}
        </div>
        <button className="mt-6 w-full bg-red-500 text-white py-2 rounded-lg">View All Products</button>
      </section>

      {/* Browse By Category */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Browse By Category</h2>
        <div className="flex space-x-4">
          <div className="flex-1 bg-white p-4 rounded-lg shadow-lg text-center">
            <img src="/images/category-phones.png" alt="Phones" className="w-12 mx-auto" />
            <p className="mt-2">Phones</p>
          </div>
          <div className="flex-1 bg-white p-4 rounded-lg shadow-lg text-center">
            <img src="/images/category-computers.png" alt="Computers" className="w-12 mx-auto" />
            <p className="mt-2">Computers</p>
          </div>
          {/* Add more categories similarly */}
        </div>
      </section>

      {/* Best Selling Products */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Best Selling Products</h2>
        <div className="grid grid-cols-4 gap-4">
          {/* Sample Product */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img src="/images/product-2.png" alt="Product" className="w-full h-48 object-cover rounded-lg" />
            <h3 className="text-lg font-semibold text-gray-800 mt-4">The North Coat</h3>
            <p className="text-gray-600">$280 <span className="line-through">$350</span></p>
            <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg">Add to Cart</button>
          </div>
          {/* Add more products similarly */}
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="bg-black text-white">
        <div className="container mx-auto px-4 py-8 flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-bold">Enhance Your Music Experience</h2>
            <p className="mt-4">Buy Now!</p>
          </div>
          <div>
            <img src="/images/speaker-banner.png" alt="Speaker" className="w-48" />
          </div>
        </div>
      </section>
    </div>
  );
}

