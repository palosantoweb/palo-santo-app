"use client";
import { useWhatsAppRedirection } from "@/app/hooks/useWhatsAppRedirecion";
import { CarouselComponent } from "./Carousel";
import Footer from "./Footer";
import NavbarComponent from "./Navbar";
import { useSession } from "next-auth/react";
import { WhatsApp } from "@/app/icons/WhatsApp";
import { useEffect, useState } from "react";

const Container = ({ children }) => {
  const { data: session } = useSession();
  const { handleRedirect } = useWhatsAppRedirection();

  const [bottomPosition, setBottomPosition] = useState("bottom-4");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const footer = document.querySelector("footer");
      if (!footer) return;

      const footerTop = footer.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (footerTop <= windowHeight) {
        const offset = windowHeight - footerTop + 16; // Margen de 16px
        setBottomPosition(`mb-[${offset}px]`);
      } else {
        setBottomPosition("bottom-4");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <NavbarComponent />
      {!session ? <CarouselComponent /> : <></>}
      <div className="m-8">{children}</div>
      <div
        onClick={handleRedirect}
        className={`fixed right-4 z-50 cursor-pointer w-[150px] h-[150px] flex items-center justify-center transition-all duration-300 ${bottomPosition}`}
        role="button"
        aria-label="Abrir chat de WhatsApp"
      >
        <WhatsApp />
      </div>
      <Footer session={session} />
    </div>
  );
};

export default Container;
