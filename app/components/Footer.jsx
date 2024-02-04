import Image from "next/image";
import Link from "next/link";
import PS from "../../public/ps.svg"
import { UserProfile } from "./User-Profile";
import { getSession } from "@auth0/nextjs-auth0";

const Footer = async() => {

  const session = await getSession();

    
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
    <div className="flex items-center justify-between bg-gray-900 border-t-[1.5px]  border-gray-500 text-white relative bottom-0">
    <div className='mt-0 mb-3 flex'>
      <Image src={PS}/>
      </div>
      <div className="flex flex-col items-end">
      {
        links.map(({label, route})=>{
            return <div key={route} className='flex items-center ml-6 mr-6'>
            <Link href={route}><span className='text-[#CC8942]'>{label}</span></Link>
            </div>
        })
      }
      {
        session?.user ?  <UserProfile session={session}/>
        :
        <div className='flex items-end ml-6 mr-6'>
        <a href="/api/auth/login" className='text-[#CC8942] text-sm whitespace-nowrap'>Soy administrador</a>
        </div>
      }

    </div>
  </div>
);
}
 
export default Footer;
