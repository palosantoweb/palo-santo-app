"use client";
import { Carousel, Spinner } from "keep-react";
import { fixBase64Format } from "@/app/utils/CorrectBase64";
import Image from "next/image";
import { fetcher } from "@/app/utils/fetcher";
import { useEffect, useState } from "react";
import { useImages } from "@/app/context/ImagesContext";

export const CarouselComponent = ({ session }) => {
  const [loading, setLoading] = useState(true)
  const { imageCarrousel, updateImagesCarrousel, removeImageCarrousel } = useImages();



  useEffect(() => {
    const fetchData = async () => {
      try {
        const carouselImages = await fetcher(`carrousel`);
        const carouselImagesFormatted = await carouselImages.length > 0 ? fixBase64Format(carouselImages) : []
        updateImagesCarrousel(carouselImagesFormatted)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching carousel images:", error);
        setLoading(false)
      }
    };

    fetchData();
  }, []);
  

  const handleRemoveImage = async (name) => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}carrousel/${name}`, {
        method: 'DELETE'
      });
      removeImageCarrousel(name)
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  if (loading) return <Spinner />

  return (
    <div className="mb-6 md:mb-12">
      {!session ? (
        <Carousel slideInterval={5000} showControls={true} indicators={true}>
          {imageCarrousel.length > 0 ? imageCarrousel.map(({ name, base64 }) => (
            <div key={name}>
              <Image src={base64} alt={name} layout="fill" style={{ objectFit: "cover" }} />
            </div>
          )) :
            <></>}
        </Carousel>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
          {imageCarrousel.length > 0 && imageCarrousel.map(({ name, base64 }) => (
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
          ))
          }
        </div>

      )}
    </div>
  );
};