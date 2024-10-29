import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SliderButton({ currentItems, selectedId, handleSelectId }) {
  const [isSliderInitialized, setIsSliderInitialized] = useState(false);

  const settings = {
    dots: true,
    speed: 500,
    variableWidth: true,
    slidesToScroll: 1,
    autoplaySpeed: 1000,

    centerPadding: "0px",
    afterChange: () => setIsSliderInitialized(true),
  };

  useEffect(() => {
    // Simulate slider initialization delay
    setTimeout(() => {
      setIsSliderInitialized(true);
    }, 500);
  }, []);

  return (
    <div className="z-1 rounded-[60px] lg:pt-0">
      {isSliderInitialized ? (
        <Slider {...settings} className="mt-0 rounded-[60px]">
          {currentItems.map((item, index) => (
            <button
              key={index}
              className="flex justify-center w-full slider px-2 items-center h-16"
              onClick={() => handleSelectId(index)}
            >
              <div
                className={`rounded-3xl w-full  flex items-center py-0 justify-center md:h-9 xl:h-10 h-9 lg:h-10 px-6 shadow-custom
                  ${
                    selectedId === index
                      ? "bg-[#5253B9] text-white "
                      : "bg-white text-black border"
                  }`}
              >
                <span className="flex items-center justify-center">
                  {item.title}
                </span>
              </div>
            </button>
          ))}
        </Slider>
      ) : (
        <div className="flex items-center justify-center animate-pulse space-x-4">
          {[1, 2, 3].map((_, idx) => (
            <div
              key={idx}
              className="flex justify-center w-full slider px-2 items-center h-9"
            >
              <span className="rounded-full w-[120px] py-1 h-full px-6 bg-gray-300"></span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SliderButton;
