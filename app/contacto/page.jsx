import Maps from "../components/Maps";
import ContactForm from "../components/ContactForm";



const Contacto = () => {
    return (<> <div className="flex flex-col justify-center items-center">
        <div className='w-full flex flex-col items-center mb-6'>
            <h1 className='md:px-8 py-2 text-2xl text-[#CC8942] md:text-6xl text-center italic font-bold mb-4'>Contacto</h1>
            <hr className='border-1 border-gray-300 w-full mr-[40%]' />
        </div>
        <div className='px-10 md:px-16 md:text-2xl flex items-center justify-between text-justify flex-col text-gray-500 mb-6'>
            <div className='flex-1 mb-16'>
                <p className='md:mr-6 md:ml-16 italic font-semibold'>
                    Caminando podrás llegar a la playa, comercios y sitios donde encontrarás una oferta gastronómica variada y de alta calidad.
                </p>
            </div>
        </div>
        <Maps />
        <div className='mt-10 md:px-16 px-10 md:text-2xl flex items-center justify-between text-justify flex-col text-gray-500 mb-6'>
            <div className='flex-1 mb-10'>
                <p className='md:mr-6 md:ml-16 italic font-semibold'>
                    Si sientes que falta algo, que necesitas algo por favor contáctanos, disfrutamos ayudando a mejorar tu experiencia y hacer tu estadía placentera.                    </p>
            </div>
        </div>
    </div>
    <ContactForm />
    </>);
}

export default Contacto;