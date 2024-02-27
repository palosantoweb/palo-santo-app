'use client'
import { useImages } from "../../context/ImagesContext";
import { fixBase64Format } from "../../utils/CorrectBase64";
import { fetcher } from "../../utils/fetcher";
import { Spinner } from "keep-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react"



const Gallery = () => {
    const { data: session } = useSession()
    const [isModalOpen, setModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const {imageGallery, updateImagesGallery, removeImageGallery} = useImages();
    const [loading, setLoading] = useState(true)

    useEffect(()=>{

        const getImages= async () =>{
            try{
            const galleryImages = await fetcher(`gallery`)
            const galleryFormatted = fixBase64Format(galleryImages.data)
            updateImagesGallery(galleryFormatted)
            setLoading(false)
            }catch(error){
                console.error("Error fetching Gallery images:", error);
                setLoading(false)
            }
        }
        getImages();
    },[])

    const openModal = (index) => {
        setCurrentImageIndex(index);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageGallery.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imageGallery.length) % imageGallery.length);
    };

    const handleRemoveImage = async (name) => {
        try {
           await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/gallery/${name}`, {
            method: 'DELETE'
          });
          removeImageGallery(name);
        } catch (error) {
          console.error("Error deleting image:", error);
        }
      };
    if(loading) return <Spinner />


    return (<>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
            {imageGallery.length > 0 && imageGallery.map(({name, base64},index) => (
                <div key={name} className="overflow-hidden rounded-lg shadow-md " onClick={() => openModal(index)}>
                    <Image src={base64} alt={name} width={250} height={250} style={{ objectFit: 'cover', layout: 'responsive', width: '250px', height: '250px' }} />
                    {session && session.user.email && <button onClick={() => handleRemoveImage(name)} className="w-full py-2 bg-red-500 text-white font-semibold rounded-b-md"
              >
                Eliminar imagen
              </button>}
                </div>
            ))}
        </div>
        {!session && isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
                <button className="absolute top-0 right-0 m-4 text-white" onClick={closeModal}>Cerrar</button>
                <button className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white" onClick={prevImage}>&lt;</button>
                <button className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white" onClick={nextImage}>&gt;</button>
                <div className="h-screen flex items-center justify-center">
                    <Image src={imageGallery[currentImageIndex].base64} width={1000} height={500} alt={imageGallery[currentImageIndex].name} />
                </div>
            </div>
        )}
    </>);
}

export default Gallery;