"use client";
import Image from "next/image";
import { Carousel } from "keep-react";
import carouselUno from '../../public/carousel-1.jpeg'
import carouselDos from '../../public/carousel-2.jpeg'
import carouselTres from '../../public/carousel-3.jpeg'

export const CarouselComponent = () => {
  
    return (
      <div className="mb-12">
        <Carousel slideInterval={5000} showControls={true} indicators={true}>
          <div>
            <Image
              src={carouselUno}
              alt="slider-1"
              fill
              style={{objectFit: "cover"}}
            />
          </div>
          <div>
            <Image
              src={carouselDos}
              alt="slider-2"
              fill
              style={{objectFit: "cover"}}

            />
          </div>
          <div>
            <Image
              src={carouselTres}
              alt="slider-3"
              fill
              style={{objectFit: "cover"}}
              />
          </div>
        </Carousel>
      </div>
    );
  };