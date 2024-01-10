import { CarouselComponent } from "./Carousel";
import Footer from "./Footer";
import NavbarComponent from "./Navbar";
import { getCookie, hasCookie } from "cookies-next";


const Container = ({children}) => {

    const session = 'aa';
    
    return (  <>
    <NavbarComponent/>
    <CarouselComponent />
    {children}
    <Footer session={session}/>
    </>);
}
 
export default Container;

