import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import { cn } from "@/lib/utils";

const InfiniteScrollX = ({ className, images }) => {
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
            speed: 0.7,
            startDelay: 1000,
          }),
        ]}
        dir="ltr"
        // Disable user interaction by adding these props
        onMouseDown={(e) => e.preventDefault()} // Prevent mouse down events
        onTouchStart={(e) => e.preventDefault()} // Prevent touch start events
        style={{ pointerEvents: "none" }} // Disable pointer events for the carousel
      >
        <div className="absolute left-0 h-full w-6 bg-gradient-to-l z-10 from-transparent to-gray-50" />
        <div className="absolute right-0 h-full w-6 bg-gradient-to-r z-10 from-transparent to-gray-50" />
        <CarouselContent className="-mt-1 h-full max-w-full">
        {images.map((item, index) => (
  <CarouselItem
    key={index}
    className="py-2 w-full  h-[85px] flex items-center justify-center sm:basis-1/3 basis-1/3 md:basis-1/4 lg:basis-1/5 2xl:basis-1/6"
  >
    <div className="p-0 flex items-center justify-center">
      <img
        src={item.src}
        alt={item.alt}
        loading="lazy"
        width={item.id === 24 ? 80 : 60}
        height={item.id === 24 ? 60 : 40}
        className={`max-w-full object-contain aspect-[3/1.3] filter grayscale ${
          item.id === 24
            ? "scale-[1.5] xl:scale-[1.3]"
            : item.id === 25
            ? "scale-[1.8] xl:scale-[2.8] mt-3"
             : item.id === 20
            ? "scale-[1.8] xl:scale-[2.8]"
            : "scale-[1.5] xl:scale-[2.0]"
        }`}
      />
    </div>
  </CarouselItem>
))}

        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default InfiniteScrollX;
