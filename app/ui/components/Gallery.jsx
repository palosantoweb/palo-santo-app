'use client'
import { images } from '../../utils/gallery';

import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';


// import plugins if you need
import lgAutoplay from 'lightgallery/plugins/autoplay'
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import Image from 'next/image';


const Gallery = () => {
    return (<>  <LightGallery
        speed={500}
        download={false}
        zoom={false}
        plugins={[lgAutoplay, lgFullscreen]}
        elementClassNames='wrapper-class'
    >

        {images.map((image, index) => {
            return (

                <Image key={index} alt={image.alt} src={image.src} style={{ height: "250px" }} className='w-full object-cover' />

            )
        })}

    </LightGallery>
    </>);
}

export default Gallery;