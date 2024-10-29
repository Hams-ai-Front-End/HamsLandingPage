import React, { useState, useCallback, useEffect } from "react";
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
              <span
                className={`rounded-full w-full py-2 xl:py-1 lg:py-1 h-full px-6 shadow-custom
                  ${
                    selectedId === index
                      ? "bg-[#5253B9] text-white "
                      : "bg-white text-black border"
                  }`}
              >
                {item.title}
              </span>
            </button>
          ))}
        </Slider>
      ) : (
        <div className="flex items-center justify-center animate-pulse space-x-4">
          {[1, 2, 3].map((_, idx) => (
            <div key={idx} className="flex justify-center w-full slider px-2 items-center h-9">
              <span
                className="rounded-full w-[120px] py-1 h-full px-6 bg-gray-300"
              ></span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SliderButton;
