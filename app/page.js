import Image from 'next/image'
import photoOne from '../public/photo-1.svg';
import photoTwo from '../public/photo-2.svg';
import Link from 'next/link';
import { GoArrowRight } from "react-icons/go";


export default function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-between p-6">
      <div className='w-full flex flex-col items-center mb-6'>
      <h1 className='px-12  py-2 sm:text-3xl  text-[#CC8942] md:text-6xl text-center italic font-semibold mb-4'>¡Tu escape perfecto en medio de la belleza natural!</h1>
      <hr className='border-1 border-gray-300 w-full mr-[80%]'/>
      </div>
      <div className=' px-16 md:text-2xl flex items-center justify-between flex-col md:flex-row  text-gray-500 mb-6'>
      <div className='flex-1 '>
        <p>
          Descubre la esencia de la aventura en Palo Santo Apartments, un refugio diseñado especialmente para los amantes de la naturaleza y la emoción al aire libre.
          Sumérgete en la simplicidad y eficiencia de nuestros servicios, cuidadosamente concebidos para ser amigables con el medio ambiente, mientras te rodeas de un oasis verde con características únicas.
        </p>
      </div>
      <div className='md:flex-1'>
        <Image src={photoOne} alt='foto uno' width={500} height={300} />
      </div>
    </div>
    <div className='w-full flex flex-col items-end ml-12 pl-40'>
    <hr className='border-1 border-gray-300 w-full mt-3 mb-6'/>
    <div className='px-16 md:text-2xl flex items-center justify-between flex-col md:flex-row  text-gray-500 mb-6'>
      
    <Image src={photoTwo}  alt='foto dos' width={500} height={300}/>
    <p className='ml-6'>
    Situados en un apacible barrio, nos encontramos estratégicamente ubicados a una distancia perfecta del centro, 
    el majestuoso cerro Catedral y las relajantes playas. 
    En Palo Santo Apartments, nos esforzamos por proporcionar todo lo necesario para que encuentres el descanso que mereces y recuperes energías, 
    permitiéndote luego disfrutar plenamente del encanto del lago, el misterioso bosque y la majestuosidad de la montaña. 
    </p>
    </div>
    </div>
    <div className='w-full flex flex-col items-center mb-6'>
    <hr className='border-1 border-gray-300 w-full mr-[80%] mb-8'/>
    <div className='bg-[#CC8942] px-28 py-20 block'><p className='text-white flex'><Link href="/contacto" className='flex'>¡Quiero contactarme y hacer una reserva!<GoArrowRight className='mt-1'/></Link></p></div>
    </div>
    </main>
  )
}