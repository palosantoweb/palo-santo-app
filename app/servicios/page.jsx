import Link from 'next/link';
import { GoArrowRight } from 'react-icons/go';
import './style.css';
import Gallery from '../ui/components/Gallery';

const Servicios = () => {
  return (
    <>
      <div className='flex flex-col'>
        <div className='w-full flex flex-col items-center mb-6'>
          <h1 className='md:px-8 py-2 text-2xl text-[#CC8942] md:text-6xl text-center italic font-bold mb-4'>
            Descubre Nuestros Servicios
          </h1>
          <hr className='border-1 border-gray-300 w-full mr-[40%' />
        </div>
        <div className='mt-10 md:px-10 md:text-2xl flex items-center justify-center flex-col text-gray-500 mb-6'>
          <div className='ml-6 md:ml-0 mb-28 mr-3'>
            <p className='md:mr-6 md:ml-16 italic font-semibold text-justify'>
              Sumérgete en una experiencia única de confort y libertad en
              nuestras acogedoras y modernas unidades de 1 y 2 ambientes,
              equipadas con:
            </p>
            <ul className='list-disc md:ml-16'>
              <li className='mt-6 mb-3'>
                Cocina y horno a gas, heladera/heladera con freezer
              </li>
              <li className='mb-3'>
                Microonda/tostadora/cafetera/pava eléctrica
              </li>
              <li className='mb-3'>
                Calefactor tiro balanceado/detectores de monóxido
              </li>
              <li className='mb-3'>Cortinas Blackout</li>
              <li className='mb-3'>Alarma</li>
              <li className='mb-3'>Wifi</li>
              <li className='mb-3'>Smart TV</li>
              <li className='mb-3'>Ventanas Termopanel</li>
              <li className='mb-3'>Amenities</li>
              <li className='mb-3'>Estacionamiento</li>
              <li className='mb-3'>Blanquería</li>
            </ul>
          </div>
          <Gallery />
          <div className='bg-[#CC8942] px-8 py-4 md:px-28 md:py-20 block'>
            <p className='text-white flex md:text-xl text-sm'>
              <Link href='/contacto' className='flex'>
                ¡Contactanos y Reserva Ahora!
                <GoArrowRight className='mt-1' />
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Servicios;
