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
              className="pt-1 w-full flex items-center justify-center sm:basis-1/3 basis-1/3 md:basis-1/4 lg:basis-1/5 2xl:basis-1/6"
            >
              <div className="p-1">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  width={60}
                  height={60}
                  className="max-w-full scale-[2] object-contain aspect-[3/1.3] active:cursor-grab filter grayscale"
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
