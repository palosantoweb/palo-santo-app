'use client';
import Image from 'next/image';
import photoOne from '../public/photo-1.svg';
import photoTwo from '../public/photo-2.svg';
import Link from 'next/link';
import { GoArrowRight } from 'react-icons/go';
import { redirect } from 'next/navigation';
import { useSession, signIn, signOut } from 'next-auth/react';
import Banner from './ui/components/Banner';

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    redirect('/dashboard');
  }

  return (
    <main className='min-h-screen w-full flex flex-col items-center justify-between p-6'>
      <div className='w-full flex flex-col items-center mb-6'>
        <h1 className='md:px-8 py-2 text-2xl text-[#CC8942] md:text-6xl text-center italic font-bold mb-4'>
          Explora la Naturaleza en Palo Santo Apartments - Tu Refugio Perfecto
        </h1>
        <hr className='border-1 border-gray-300 w-full mr-[40%]' />
      </div>
      <div className='md:px-10 md:text-2xl flex items-center justify-between text-justify flex-col md:flex-row text-gray-500 mb-6'>
        <div className='flex-1 '>
          <p className='md:mr-6 md:ml-16'>
            Descubre la esencia de la experiencia en Palo Santo Apartments, un
            refugio diseñado para amantes de la naturaleza y el aire libre.
            Sumérgete en la simplicidad y eficiencia de nuestros servicios,
            concebidos para ser amigables con el medio ambiente, mientras te
            rodeas de la belleza de la Patagonia.
          </p>
        </div>
        <div className='flex-1'>
          <Image src={photoOne} alt='foto uno' width={500} height={300} />
        </div>
      </div>
      <div className='w-full flex flex-col items-end md:ml-12 md:pl-20'>
        <hr className='border-1 border-gray-300 w-full mt-3 mb-28' />
        <div className='text-justify md:text-2xl flex items-center justify-between flex-col md:flex-row  text-gray-500 mb-6'>
          <Image src={photoTwo} alt='foto dos' width={500} height={300} />
          <p className='md:ml-6 mt-3 md:mr-48'>
            Ubicados estratégicamente en un apacible barrio, Palo Santo
            Apartments se encuentra a 12 minutos del centro de Bariloche, a 1,5
            Km del cruce al Cerro Catedral y tan solo 200 metros de la bajada a
            Playa Bonita, parada de colectivos, comercios varios y varias
            opciones de restaurantes.
          </p>
        </div>
      </div>
      <div className='w-full flex flex-col items-center mb-6'>
        <hr className='border-1 border-gray-300 w-full mr-[40%] mt-10 mb-10' />
        <div className='bg-[#CC8942] px-8 py-4 md:px-28 md:py-20 block'>
          <p className='text-white flex md:text-xl text-sm'>
            <Link href='/contacto' className='flex'>
              ¡Contactanos y Reserva Ahora!
              <GoArrowRight className='mt-1' />
            </Link>
          </p>
        </div>
      </div>
      <Banner />
    </main>
  );
}
