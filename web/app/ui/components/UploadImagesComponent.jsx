'use client'

import { useImages } from "@/app/context/ImagesContext";
import { fetcher } from "@/app/utils/fetcher";
import Image from "next/image";
import { useState } from "react";

const UploadImagesComponent = () => {
    const [imageFiles, setImageFiles] = useState([]);
    const [selectedOption, setSelectedOption] = useState("");
    const { updateImagesCarrousel, removeImageCarrousel, updateImagesGallery, removeImageGallery } = useImages();

    const handleImageUpload = async (e) => {
        const newFiles = [...imageFiles];


        try {
            if (e.target.files) {
                const promises = Array.from(e.target.files).map(async (file) => {
                    return new Promise((resolve) => {
                        let reader = new FileReader();
                        reader.readAsDataURL(file);
                        reader.onload = () => {
                            newFiles.push({
                                base64: reader.result,
                                name: file.name
                            });
                            resolve();
                        };
                    });
                });

                await Promise.all(promises);

                setImageFiles(newFiles);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleRemoveImage = (name) => {
        const newFiles = imageFiles.filter((file) => file.name !== name);
        setImageFiles(newFiles);
        if(selectedOption === 'gallery'){
            removeImageGallery(name)
        }else{
            removeImageCarrousel(name)
        }
    };

    const uploadImages = () => {

        if(selectedOption !== ''){
        const sendData = async () => {
            const response = await fetcher(`${selectedOption === 'gallery' ? 'gallery' : 'carrousel'}/upload`, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(imageFiles)
            });
            if (response && selectedOption === 'gallery') {
                updateImagesGallery(imageFiles)
                setImageFiles([])
            }else{
                updateImagesCarrousel(imageFiles)
            }

        };
        sendData()
    }
       
    }


    return (
        <div className="container mx-auto my-8 flex flex-col items-center justify-center">
            <div className="flex flex-col justify-between items-center mb-4">
                <span className="text-4xl font-semibold mb-6 text-[#CC8942]">
                    Subir imágenes
                </span>
                <div className="flex flex-col items-center justify-center">
                {selectedOption === '' && <h1>Seleccione donde desea subir las imagenes:</h1>}
                    <div className="flex flex-row">
                    <label className="mr-2" htmlFor="galeria">Galería</label>
                    <input className="mr-10" type="radio" id="galeria" name="radiobutton" checked={selectedOption === "gallery"} onChange={() => setSelectedOption('gallery')} />
                    <label className="mr-2" htmlFor="carrousel">Carrousel</label>
                    <input type="radio" id="carrousel" checked={selectedOption === "carrousel"} name="radiobutton" onChange={() => setSelectedOption('carrousel')} />
                    </div>
                </div>
                <div className="relative flex flex-col items-center justify-center">
                    <input
                        id="id-16"
                        type="file"
                        onChange={(e) => handleImageUpload(e)}
                        multiple
                        className="hidden"
                    />
                    <label
                        htmlFor="id-16"
                        className="bg-[#CC8942] py-2 px-6 rounded-md cursor-pointer text-white hover:bg-[#AA713D] transition duration-300 ease-in-out"
                    >
                        Seleccionar Imágenes
                    </label>
                    <label>
                        {imageFiles.length} imagenes seleccionadas
                    </label>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {imageFiles.map((image, index) => (
                    <div key={index} className="overflow-hidden rounded-lg shadow-md">
                        <Image
                            src={image.base64}
                            alt={image.name}
                            width={250}
                            height={250}
                            style={{ objectFit: "cover", width: "250px", height: "250px" }}
                        />
                        <button
                            onClick={() => handleRemoveImage(image.name)}
                            className="w-full py-2 bg-red-500 text-white font-semibold rounded-b-md"
                        >
                            Eliminar imagen
                        </button>
                    </div>
                ))}
            </div>
            <button className="bg-[#CC8942] py-2 px-6 rounded-md cursor-pointer text-white hover:bg-[#AA713D] transition duration-300 ease-in-out mt-10" onClick={() => uploadImages()}>
                Subir Imagenes
            </button>
        </div>
    );
};



export default UploadImagesComponent;