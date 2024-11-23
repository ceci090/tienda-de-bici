"use client";

import Image from "next/image";
import { useState } from "react";

export default function Carousel(){
    const images = [
        "/images/bici1.jpg",
        "/images/bici2.jpg",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () =>{
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? images.length - 1 : prevIndex - 1);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === images.length -1 ? 0 : prevIndex + 1);
    };

    return (
        <div className="relative w-full max-w-6xl mx-auto">
          {/* Imagen actual */}
          <div className="overflow-hidden rounded-lg shadow-md">
            <Image
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              width={800}
              height={400}
              className="object-cover w-full h-[400px]"
            />
          </div>
    
          {/* Botones de navegación */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 bg-opacity-70 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-500"
          >
            ‹
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 bg-opacity-70 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-500"
          >
            ›
          </button>
    
          {/* Indicadores */}
          <div className="flex justify-center mt-4 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index
                    ? "bg-blue-500"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              ></button>
            ))}
          </div>
        </div>
      );
};