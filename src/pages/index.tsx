import React, { useEffect } from 'react';
import Header from '../components/header/page';
import Cart from '../components/cart/page';
import Footer from '../components/footer/page';

export default function App() {
  useEffect(() => {
    document.title = 'Home ';
  }, []);

  return (
    <div>
      <Header />
      <Cart />
      <Footer />
    </div>
  );
}
