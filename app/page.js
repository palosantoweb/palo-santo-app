'use server'
import Image from 'next/image'
import photoOne from '../public/photo-1.svg';
import photoTwo from '../public/photo-2.svg';
import Link from 'next/link';
import { GoArrowRight } from "react-icons/go";
import { redirect } from 'next/navigation';
import { getSession } from '@auth0/nextjs-auth0';
import Banner from './components/Banner';

export default async function Home() {
  const session = await getSession();

    if(session?.user){
        redirect('/dashboard')
    }


  return (
    <main className="w-full flex flex-col items-center justify-between p-6">
      <div className='w-full flex flex-col items-center mb-6'>
      <h1 className='md:px-8  py-2 text-2xl text-[#CC8942] md:text-6xl text-center italic font-bold mb-4'>¡Tu escape perfecto en medio de la belleza natural!</h1>
      <hr className='border-1 border-gray-300 w-full mr-[40%]'/>
      </div>
      <div className=' md:px-10 md:text-2xl flex items-center justify-between text-justify flex-col md:flex-row text-gray-500 mb-6'>
      <div className='flex-1 '>
        <p className='md:mr-6 md:ml-16'>
          Descubre la esencia de la aventura en Palo Santo Apartments, un refugio diseñado especialmente para los amantes de la naturaleza y la emoción al aire libre.
          Sumérgete en la simplicidad y eficiencia de nuestros servicios, cuidadosamente concebidos para ser amigables con el medio ambiente, mientras te rodeas de un oasis verde con características únicas.
        </p>
      </div>
      <div className='flex-1'>
        <Image src={photoOne} alt='foto uno' width={500} height={300} />
      </div>
    </div>
    <div className='w-full flex flex-col items-end md:ml-12 md:pl-20'>
      <hr className='border-1 border-gray-300 w-full mt-3 mb-28'/>
    <div className='text-justify md:text-2xl flex items-center justify-between flex-col md:flex-row  text-gray-500 mb-6'>
      
    <Image src={photoTwo}  alt='foto dos' width={500} height={300}/>
    <p className='md:ml-6 mt-3 md:mr-48'>
    Situados en un apacible barrio, nos encontramos estratégicamente ubicados a una distancia perfecta del centro, 
    el majestuoso cerro Catedral y las relajantes playas. 
    En Palo Santo Apartments, nos esforzamos por proporcionar todo lo necesario para que encuentres el descanso que mereces y recuperes energías, 
    permitiéndote luego disfrutar plenamente del encanto del lago, el misterioso bosque y la majestuosidad de la montaña. 
    </p>
    </div>
    </div>
    <div className='w-full flex flex-col items-center mb-6'>
    <hr className='border-1 border-gray-300 w-full mr-[40%] mt-10 mb-28'/>
    <div className='bg-[#CC8942] px-8 py-4 md:px-28 md:py-20 block'><p className='text-white flex'><Link href="/contacto" className='flex'>¡Quiero contactarme y hacer una reserva!<GoArrowRight className='mt-1'/></Link></p></div>
    </div>
    <Banner/>
    </main>
  )
}