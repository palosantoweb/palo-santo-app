"use client";
import { Carousel, Spinner } from "keep-react";
import { fixBase64Format } from "../../utils/CorrectBase64";
import Image from "next/image";
import { useEffect, useState } from "react";
import { fetcher } from "../../utils/fetcher";
import { useImages } from "../../context/ImagesContext";
import { useSession, signIn, signOut } from "next-auth/react"

const imageCarrousel = []

export const CarouselComponent = () => {
  const { data: session } = useSession()
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
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/carrousel/${name}`, {
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
      { !session  && imageCarrousel.length > 0  ? (
        <Carousel slideInterval={5000} showControls={true} indicators={true}>
          {imageCarrousel.map(({ name, base64 }) => (
            <div key={name}>
              <Image src={base64} alt={name} layout="fill" style={{ objectFit: "cover" }} />
            </div>
          ))}
        </Carousel>)
         :
        <></>}
      { session && session.user.email && (
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