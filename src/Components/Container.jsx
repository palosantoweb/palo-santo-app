import { CarouselComponent } from "./CarouselComponent";
import Footer from "./Footer";
import NavbarComponent from "./Navbar";

const Container = ({children}) => {
    return (  <>
    <NavbarComponent/>
    <CarouselComponent/>
    {children}
    <Footer/>
    </>);
}
 
export default Container;