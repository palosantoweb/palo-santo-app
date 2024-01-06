'use client'
import { Label, TextInput, Textarea } from "keep-react";

const { default: Map } = require("../components/GoogleMaps")

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
        <Map />
        <div className='mt-10 md:px-16 px-10 md:text-2xl flex items-center justify-between text-justify flex-col text-gray-500 mb-6'>
            <div className='flex-1 mb-10'>
                <p className='md:mr-6 md:ml-16 italic font-semibold'>
                    Si sientes que falta algo, que necesitas algo por favor contáctanos, disfrutamos ayudando a mejorar tu experiencia y hacer tu estadía placentera.                    </p>
            </div>
        </div>
    </div>
    <div className="flex flex-col items-center w-full mb-10" >
                <form className="md:w-[50%]">
                    <div>
                        <Label htmlFor="#id-11" value="Nombre" />
                        <TextInput
                            id="#id-11"
                            color="gray"
                        />
                    </div>
                    <div>
                        <Label htmlFor="#id-12" value="Email" />
                        <TextInput
                            id="#id-12"
                            color="gray"
                        />
                    </div>
                    <div>
                        <Label htmlFor="#id-13" value="Celular" />
                        <TextInput
                            id="#id-13"
                            color="gray"
                        />
                    </div>
                    <div className="mt-12">
                        <Textarea
                            id="comment"
                            placeholder="Dejanos tu consulta.."
                            withBg={true}
                            color="gray"
                            border={true}
                            rows={4}
                        />
                    </div>
                    <button className="bg-[#CC8942] px-7 py-4 mt-7 text-white">Enviar</button>
                </form>
            </div>
 
    </>);
}

export default Contacto;