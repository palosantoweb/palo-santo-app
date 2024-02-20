'use client'
import React, { createContext, useContext, useState } from 'react';

export const ImagesContext = createContext();

export const ImagesProvider = ({ children }) => {
    const [imageCarrousel, setImageCarrousel] = useState([]);
    const [imageGallery, setImageGallery] = useState([])


    const updateImagesCarrousel = (newImages) => {
        setImageCarrousel(newImages)
    };

    const removeImageCarrousel = (imageName) => {
        setImageCarrousel((prevImages) => prevImages.filter((image) => image.name !== imageName));
    };

    const updateImagesGallery = (newImages) => {
        setImageGallery(newImages)
    };

    const removeImageGallery = (imageName) => {
        setImageGallery((prevImages) => prevImages.filter((image) => image.name !== imageName));
    };

    return (
        <ImagesContext.Provider value={{ imageCarrousel, updateImagesCarrousel, removeImageCarrousel, imageGallery, updateImagesGallery, removeImageGallery }}>
            {children}
        </ImagesContext.Provider>
    );
};

export const useImages = () => {
    return useContext(ImagesContext);
};
