import Gallery from "@/app/ui/components/Gallery";
import UploadImagesComponent from "@/app/ui/components/UploadImagesComponent";
import { CarouselComponent } from "@/app/ui/components/Carousel";
import { getSession } from "@auth0/nextjs-auth0";


const ImagePage = async() => {

const session = await getSession();

    return ( <>
    <div className="min-h-screen">

     <UploadImagesComponent />
     <div className="mt-10 md:px-10 md:text-2xl flex items-center justify-center flex-col text-gray-500 mb-6">
     <hr className="w-full border-2 mb-10"/>
     <h1 className="md:px-8 py-2 text-md text-[#CC8942] md:text-4xl text-center italic font-bold mb-4">Imagenes Actuales en Carrousel</h1>
     <CarouselComponent session={session.user.email}/>
     
     <hr className="w-full border-2 mb-10"/>
     <h1 className="md:px-8 py-2 text-md text-[#c4ad95] md:text-4xl text-center italic font-bold mb-4">Imagenes Actuales en galería</h1>

     <Gallery session={session.user.email}/>
     </div>
     </div>    
     </> );
}
 
export default ImagePage;