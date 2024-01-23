import Maps from "../ui/components/Maps";
import ContactForm from "../ui/components/ContactForm";



const Contacto = async() => {
    const response = await fetch(`https://restcountries.com/v3.1/all`, { method: 'GET' })
    const responseDataCountries = await response.json()

    return (<> <div className="min-h-screen flex flex-col justify-center items-center">
    <div className='w-full flex flex-col items-center mb-6'>
        <h1 className='md:px-8 py-2 text-2xl text-[#CC8942] md:text-6xl text-center italic font-bold mb-4'>
            Ponte en Contacto con Nosotros</h1>
        <hr className='border-1 border-gray-300 w-full mr-[40%]' />
    </div>
    <div className='px-10 md:px-16 md:text-2xl flex items-center justify-between text-justify flex-col text-gray-500 mb-6'>
        <div className='flex-1 mb-16'>
            <p className='md:mr-6 md:ml-16 italic font-semibold'>
                Explora la proximidad a la playa, comercios y una variedad de opciones gastronómicas de alta calidad a pocos pasos de nuestro lugar.
            </p>
        </div>
    </div>
    <Maps />
    <div className='mt-10 md:px-16 px-10 md:text-2xl flex items-center justify-between text-justify flex-col text-gray-500 mb-6'>
        <div className='flex-1 mb-10'>
            <p className='md:mr-6 md:ml-16 italic font-semibold'>
                Si sientes que falta algo o necesitas asistencia, contáctanos. Disfrutamos ayudando a mejorar tu experiencia y haciendo tu estadía lo más placentera posible.
            </p>
        </div>
    </div>
</div>
    <ContactForm responseDataCountries={responseDataCountries}/>
    </>);
}

export default Contacto;