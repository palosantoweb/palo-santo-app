"use client";
import { Carousel, Spinner } from "keep-react";
import { fixBase64Format } from "@/app/utils/CorrectBase64";
import Image from "next/image";
import { fetcher } from "@/app/utils/fetcher";
import { useEffect, useState } from "react";

export const CarouselComponent = ({ session }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const carouselImages = await fetcher(`carrousel`, { cache: "no-store" });
        const carouselImagesFormatted = fixBase64Format(carouselImages)
        setLoading(false)
        setImages(carouselImagesFormatted);
      } catch (error) {
        console.error("Error fetching carousel images:", error);
        setLoading(false)
      }
    };

    fetchData();
  }, [images]); 

  const handleRemoveImage = async (name) => {
    try {
       await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}carrousel/${name}`, {
        method: 'DELETE'
      });
      setImages([]);
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  if(loading) return <Spinner />

  return (
    <div className="mb-12">
      {!session ? (
        <Carousel slideInterval={5000} showControls={true} indicators={true}>
          {images.length > 0 && images.map(({ name, base64 }) => (
            <div key={name}>
              <Image src={base64} alt={name} layout="fill" style={{ objectFit: "cover" }} />
            </div>
          ))}
        </Carousel>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
          {images.length > 0 && images.map(({ name, base64 }) => (
            <div key={name} className="overflow-hidden rounded-lg shadow-md">
              <Image
                src={base64}
                alt={name}
                height={250}
                width={250}
                style={{ objectFit: 'cover', layout: 'responsive', width: '250px', height: '250px' }}
              />
              <button
                onClick={() => handleRemoveImage(name)}
                className="w-full py-2 bg-red-500 text-white font-semibold rounded-b-md"
              >
                Eliminar imagen
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};