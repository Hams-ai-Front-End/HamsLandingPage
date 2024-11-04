import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import { cn } from "@/lib/utils";

const ButtonSlider = ({ className, images, currentItems,handleSelectId ,selectedId}) => {
  return (
    <div className={cn("h-full w-full", className)} dir="ltr">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full relative"
        plugins={[
          AutoScroll({
            stopOnInteraction: false,
            speed: 0.4,
            startDelay: 1000,
          }),
        ]}
        dir="ltr"
        // Disable user interaction by adding these props
      
      >
        <div className="absolute left-0 h-full w-6 bg-gradient-to-l z-10 from-transparent to-gray-50" />
        <div className="absolute right-0 h-full w-6 bg-gradient-to-r z-10 from-transparent to-gray-50" />
        <CarouselContent className="-mt-1 flex">
          {currentItems.map((item, index) => (
            <CarouselItem
              key={index}
              className="pt-1 flex items-center justify-center py-3"
              style={{ flex: '0 0 auto', margin: '0 6px' }} // Allow items to take their content width
           
            >
                         <div
                className={`rounded-3xl w-full cursor-pointer  flex items-center py-0 justify-center md:h-9 xl:h-10 h-9 lg:h-10 px-6 shadow-custom
                  ${
                    selectedId === index
                      ? "bg-[#5253B9] text-white "
                      : "bg-white text-black border"
                  }`}
                  onClick={() => handleSelectId(index)}
              >
                <span className="flex items-center justify-center"    >
                  {item.title}
                </span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ButtonSlider;
