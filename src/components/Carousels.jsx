import React, { useState, useEffect } from "react";
import { Carousel } from "@material-tailwind/react";

export default function Carousels() {
  const [slides, setSlides] = useState([]);
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await fetch("/photo.json");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setSlides(data.slides);
      } catch (error) {
        console.error("Error fetching photo.json:", error);
      }
    };

    fetchSlides();
  }, []);

  return (
    <div className="relative">
      <Carousel
        autoplay={!isMouseOver}
        onMouseEnter={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
      >
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`slide-${index}`}
            className="h-[20rem] lg:h-[40rem] w-full object-cover"
          />
        ))}
      </Carousel>
      <div className="absolute top-10 md:top-20 lg:top-[35%] flex flex-col items-center justify-center gap-2 lg:gap-8 mx-10">
        <h2 className="text-white drop-shadow-lg text-xl md:text-3xl lg:text-5xl text-center font-bold">
        Discover Unforgettable Moments: Your Elite Event Planning Solution
        </h2>
       
      </div>
    </div>
  );
}
