import Image from "next/image";
import Link from "next/link";
import PS from "../../public/ps.svg"


const Footer = () => {
    
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
        },
        {
            route: "login",
            label: "Soy administrador"
        }
    ]

    return ( <div className="flex items-center justify-between bg-gray-900 border-t-[1.5px]  border-gray-500 text-white">
    <div className='mt-0 mb-3 flex'>
      <Image src={PS}/>
      </div>
      <div>
      {
        links.map(({label, route})=>{
            return <div key={route} className='flex items-center ml-6 mr-6'>
            <Link href={route}><span className='text-[#CC8942]'>{label}</span></Link>
            </div>
        })
      }
    </div>
  </div>);
}
 
export default Footer;