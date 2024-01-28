import Nosotros from '../../public/Nosotros.svg'
import Contactanos from '../../public/Contactanos.svg'
import Servicios from '../../public/Servicios.svg'
import Image from 'next/image';
import { GoArrowRight } from 'react-icons/go';
import Link from 'next/link';

const Banner = () => {
    return ( <><div className='relative w-full md:h-80 mb-6 overflow-hidden'>
    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-opacity-80 p-4 text-center'>
        <Link href="/servicios"><p className='text-white md:text-4xl flex'>Nuestros servicios <GoArrowRight className=' mt-7 sm:mt-1'/></p></Link>
    </div>
    <Image className='w-full h-full object-cover' src={Servicios} alt='servicios'/>
</div>

<div className='relative w-full md:h-80 mb-6 overflow-hidden'>
    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-opacity-80 p-4 text-center'>
    <Link href="/nosotros"><p className='text-white md:text-4xl flex'>Acerca de Nosotros <GoArrowRight className='mt-7 sm:mt-1'/></p></Link>
    </div>
    <Image className='w-full h-full object-cover' src={Nosotros} alt='nosotros'/>
</div>

<div className='relative w-full md:h-80 mb-6 overflow-hidden'>
    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-opacity-80 p-12 md:p-4 text-center'>
    <Link href="/contacto"><p className='text-white md:text-4xl flex'>Contactanos <GoArrowRight className='mt-1'/></p></Link>
    </div>
    <Image className='w-full h-full object-cover' src={Contactanos} alt='contactanos'/>
</div>
</>
 );
}
 
export default Banner;