'use client';
import Link from 'next/link';
import { GoArrowRight } from 'react-icons/go';
import { images } from '../utils/gallery';
import './style.css';

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

const Servicios = () => {

    return (<>
        <div className='flex flex-col'>
            <div className='w-full flex flex-col items-center mb-6'>
                <h1 className='md:px-8 py-2 text-2xl text-[#CC8942] md:text-6xl text-center italic font-bold mb-4'>Servicios</h1>
                <hr className='border-1 border-gray-300 w-full mr-[40%]' />
            </div>

            <div className='mt-10 md:px-10 md:text-2xl flex items-center justify-between text-justify flex-col text-gray-500 mb-6'>
                <div className='flex-1 mb-28'>
                    <p className='md:mr-6 md:ml-16 italic font-semibold'>
                        Embárcate en una experiencia única de confort y libertad en nuestras acogedoras habitaciones de 1 y 2 dormitorios, equipadas con cocinas a gas y heladeras.
                    </p>
                </div>

                <LightGallery
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
                <div className='bg-[#CC8942] px-8 py-4 md:px-28 md:py-20 block'><p className='text-white flex'><Link href="/contacto" className='flex'>¡Quiero contactarme y hacer una reserva!<GoArrowRight className='mt-1' /></Link></p></div>

            </div>
        </div>

    </>);
}

export default Servicios;