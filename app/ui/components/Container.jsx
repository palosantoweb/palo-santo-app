'use client'
import { CarouselComponent } from "./Carousel";
import Footer from "./Footer";
import NavbarComponent from "./Navbar";
import { useSession } from "next-auth/react"


const Container = ({children}) => {

    const { data: session } = useSession()

    
    return (  <>
    <NavbarComponent/>
    { !session ? <CarouselComponent /> : <></>}
    {children}
    <Footer session={session}/>
    </>);
}
 
export default Container;

