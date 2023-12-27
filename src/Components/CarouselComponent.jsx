"use client";
import Image from "next/image";
import { Carousel } from "keep-react";
import carouselUno from '../../public/carousel-1.jpeg'
import carouselDos from '../../public/carousel-2.jpeg'
import carouselTres from '../../public/carousel-3.jpeg'

export const CarouselComponent = () => {
    const containerStyle = {
      width: '100vw', 
      height: '100vh', 
    };
  
    return (
      <div className="flex items-center justify-between relative overflow-hidden">
        <Carousel slideInterval={5000} showControls={true} indicators={true} style={containerStyle}>
          <div style={containerStyle}>
            <Image
              src={carouselUno}
              alt="slider-1"
              fill
              objectFit="cover" 
            />
          </div>
          <div style={containerStyle}>
            <Image
              src={carouselDos}
              alt="slider-2"
              fill
              objectFit="cover" 
            />
          </div>
          <div style={containerStyle}>
            <Image
              src={carouselTres}
              alt="slider-3"
              fill
              objectFit="cover" 
            />
          </div>
        </Carousel>
      </div>
    );
  };