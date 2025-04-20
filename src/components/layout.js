/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect, useState } from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
import "../styles/global.css"; // Import your Tailwind CSS here
import { Bars } from "react-loader-spinner";
import { Helmet } from "react-helmet";

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
    <>
      <Helmet>
        <script>
          {`!function (w, d, t) {
  w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(
var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script")
;n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
  ttq.load('D01TA6JC77U5A1Q01720');
  ttq.page();
}(window, document, 'ttq');`}
        </script>
      </Helmet>
      <div className="font-poppins">
        <Header />
        <main className="overflow-x-hidden">{children}</main>
        <Footer />
      </div>
    </>
  );
}
