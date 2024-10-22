import React from 'react';
// import LogoWhite from '../assets/images/logo-white.png';
 import hams from '../assets/images/logonew.svg';

const Logo = ({ isWhite, ...props }) => {
  return (
    <div id="logo-img" className="logo-img-en">
      {/* <img  src={hjz} alt='Clickn.AI' /> */}

      <img src={hams} className='mt-2 w-[80px]'/>
    </div>
  );
};

export default Logo;
