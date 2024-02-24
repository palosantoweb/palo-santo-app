'use client'
import Image from 'next/image';
import PaloSanto from '../../../public/PaloSanto.svg'
import HamburgerIcon from '../../../public/HamburgerIcon.svg'
import Link from 'next/link';
import { useState } from 'react';

const NavbarComponent = () => {
const [show, setShow] = useState(false)

const links=[
    {
        route: "/",
        label: "Home"
    },
    {
        route: "nosotros",
        label:"Nosotros"
    },
    {
        route: "servicios",
        label: "Servicios"
    },
    {
        route: "contacto",
        label: "Contacto"
    }
]
    return (
    <nav className='w-full bg-gray-900'>
           <div className='w-full bg-gray-900 flex flex-row justify-between'>
            <Link href="/">
            <Image src={PaloSanto} alt='Palo Santo' width={150} height={250} />
            </Link>
        <div className="lg:hidden cursor-pointer mr-5 mt-3">
          <button onClick={() => setShow(prev => !prev)}>
            <Image src={HamburgerIcon} alt='HamburgerIcon' style={{ color: '#CC8942' }}/>
          </button>
        </div>
        <div className='hidden lg:flex mx-11'>
        {
            links.map(({label, route})=>(
                <div key={route} className='flex items-center ml-6'>
                <Link href={route}><span className='text-[#CC8942]'>{label}</span></Link>
                </div>
            ))
        }        
        </div>
        </div>
        {show && (
        <div className="w-full bg-gray-900 lg:hidden flex flex-col justify-start mt-2">
          {links.map(({ label, route }) => (
            <div key={route}>
              <Link href={route}><span className='text-[#CC8942]'>{label}</span></Link>
            </div>
          ))}
        </div>
      )}

    </nav>
 );
}
 
export default NavbarComponent;