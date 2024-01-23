import { getSession } from "@auth0/nextjs-auth0";
import { CarouselComponent } from "./Carousel";
import Footer from "./Footer";
import NavbarComponent from "./Navbar";
import { fetcher } from "@/app/utils/fetcher";


const Container = async({children}) => {

    const session = await getSession();

    
    return (  <>
    <NavbarComponent/>
    { !session?.user ? <CarouselComponent/> : <></>}
    {children}
    <Footer session={session}/>
    </>);
}
 
export default Container;

