/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect, useState } from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
import "../styles/global.css"; // Import your Tailwind CSS here
import { Bars } from "react-loader-spinner";

export default function Layout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if the navigator is available
    if (typeof navigator !== "undefined") {
      setLoading(false); // Set loading to false if navigator is defined
    }
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[100vh]">
        <div>
          <Bars height={40} width={40} color={"#ffffff"} ariaLabel={"bars-loading"} />
        </div>
      </div>
    );
  }

  return (
    <div className="font-poppins">
      <Header />
      <main className="overflow-x-hidden">{children}</main>
      <Footer />
    </div>
  );
}
