import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";
import img1 from '../assets/images/slider/aws.webp';
import img2 from '../assets/images/slider/nn.svg';
import img3 from '../assets/images/slider/monsh.svg';
import img4 from '../assets/images/slider/vis.svg';


import { Text } from 'theme-ui';

const renderStyledText = (text) => {
  const words = text.split(" ");
  const firstTwoWords = words.slice(0, 1).join(" ");
  const remainingText = words.slice(1).join(" ");
  return (
    <>
      <span style={{ color: 'black' }}>{firstTwoWords} </span>
      <span style={{
        background: "linear-gradient(90deg, #3132A9 41.17%, #8485E6 100%)",
        WebkitBackgroundClip: "text",
        color: "transparent"
      }}>
        {remainingText}
      </span>
    </>
  );
};

// Array of images
const images = [
  { id: 1, src: img1, alt: "Image 1" },
  { id: 2, src: img2, alt: "Image 2" },
  { id: 3, src: img3, alt: "Image 3" },
  { id: 4, src: img4, alt: "Image 4" },

  { id: 7, src: img1, alt: "Image 7" },
  { id: 8, src: img2, alt: "Image 8" },


  { id: 1, src: img1, alt: "Image 1" },
  { id: 2, src: img2, alt: "Image 2" },
  { id: 3, src: img3, alt: "Image 3" },
  { id: 4, src: img4, alt: "Image 4" },

  { id: 7, src: img1, alt: "Image 7" },
  { id: 8, src: img2, alt: "Image 8" },
];

function SliderComponent() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 9,
    slidesToScroll: 1.5,
    autoplay: true,
    autoplaySpeed: 0,
    easing: "ease-in-out",
    centerMode: true,
    centerPadding: "24px",
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  const { t } = useTranslation();

  return (
    <div className="slider-container pointer-events-none"> {/* Disable pointer events */}
     {/* <Text as="h2" sx={styles.heading}>
        {renderStyledText(t('poweredby'))}
        <div className="w-full flex justify-center">
    
        </div>
      </Text>  */}
      <Slider {...settings} className="rounded-lg bg-white faded-edges2">
        {images.map((image) => (
          <div key={image.id} className="flex justify-center h-11  items-center px-4"> {/* Added gap and centering */}
       <div className=" h-full  flex justify-center">

       <img src={image.src} alt={image.alt} className=" rounded-xl px-6 py-2   scale-[1.8] filter " />

       </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SliderComponent;

const styles = {
  heading: {
    fontWeight: 600,
    fontSize: ["22px", null, null, "22px"],
    textAlign: "center",
    mb: 2,
  },
};
