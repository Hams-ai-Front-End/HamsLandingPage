/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useEffect, useState } from 'react';
import Header from './header/header';
import Footer from './footer/footer';
import '../styles/global.css'; // Import your Tailwind CSS here
import nav from '../assets/images/Rolling.svg'
export default function Layout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if the navigator is available
    if (typeof navigator !== 'undefined') {
      setLoading(false); // Set loading to false if navigator is defined
    }
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div >
          <span >



          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="font-poppins">
      <Header />
      <main className="overflow-x-hidden">
        {children}
      </main>
      <Footer />
    </div>
  );
}
