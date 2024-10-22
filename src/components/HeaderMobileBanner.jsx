import React, { useState, useEffect } from 'react';

const HeaderMobileBanner = () => {
  const [localTime, setLocalTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }));

  useEffect(() => {
    const timer = setInterval(() => {
      setLocalTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }));
    }, 1000);

    return () => clearInterval(timer); // Cleanup on component unmount
  }, []);

  return (
    <div className="flex w-full justify-between lg:px-4 md:px-4 px-3 py-3">
      <h2 className='font-bold text-sm'>Hams.<span className='text-[#3132A9]'>Ai</span></h2>
      <span dir="ltr">{localTime}</span>
    </div>
  );
};

export default HeaderMobileBanner;
