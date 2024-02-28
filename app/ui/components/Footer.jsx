import Image from "next/image";
import Link from "next/link";
import PS from "../../../public/ps.svg"
import { UserProfile } from "./User-Profile";
import { useSession, signIn, signOut } from "next-auth/react"

const Footer = () => {
  const { data: session } = useSession()


    
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
    <footer className="relative bottom-0 ">
    <div className=" flex w-full items-center justify-between bg-gray-900 border-t-[1.5px]  border-gray-500 text-white">
    <div className='mt-0 mb-3 flex'>
      <Image src={PS} alt='footer'/>
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
        session?.user ?  <UserProfile session={session} signOut={signOut}/>
        :
        <div className='flex items-end ml-6 mr-6'>
        <button onClick={()=>signIn('github', { redirect:window.origin })} className='text-[#CC8942] text-sm whitespace-nowrap'>Soy administrador</button>
        </div>
      }

    </div>
    </div>
  </footer>
);
}
 
export default Footer;
