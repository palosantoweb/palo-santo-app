import Gallery from "@/app/ui/components/Gallery";
import UploadImagesComponent from "@/app/ui/components/UploadImagesComponent";
import { CarouselComponent } from "@/app/ui/components/Carousel";
import { getSession } from "@auth0/nextjs-auth0";
import Link from "next/link";


const ImagePage = async() => {

const session = await getSession();



    return ( <>
    <div className="min-h-screen">
    <div className='bg-[#CC8942] w-[15%] mt-5 ml-6 py-4 rounded-md px-10'>
    <p className='text-white flex items-center justify-center md:text-xl text-sm'>
        <Link href='/dashboard'>Volver al dashboard</Link>
    </p>
    </div>

     <UploadImagesComponent />
     <div className="mt-10 md:px-10 md:text-2xl flex items-center justify-center flex-col text-gray-500 mb-6">
     <hr className="w-full border-2 mb-10"/>
     <h1 className="md:px-8 py-2 text-md text-[#CC8942] md:text-4xl text-center italic font-bold mb-4">Imagenes Actuales en Carrousel</h1>
     <CarouselComponent session={session.user.email} />
     
     <hr className="w-full border-2 mb-10"/>
     <h1 className="md:px-8 py-2 text-md text-[#CC8942] md:text-4xl text-center italic font-bold mb-4">Imagenes Actuales en galería</h1>

     <Gallery session={session.user.email}/>
     </div>
     </div>    
     </> );
}
 
export default ImagePage;