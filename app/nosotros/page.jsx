import Image from 'next/image';
import Trekking from '../../public/trekking.svg';
import Bike from '../../public/bike.svg';
import Cerro from '../../public/cerro.svg';
import house from '../../public/house.svg';

const Nosotros = () => {
  return (
    <>
      <div className='min-h-screen w-full flex flex-col items-center mb-6'>
        <h1 className='md:px-8 py-2 text-2xl text-[#CC8942] md:text-6xl text-center italic font-bold mb-4'>
          Descubre Nuestro Rincón de Ensueño en la Majestuosa Patagonia
        </h1>
        <hr className='border-1 border-gray-300 w-full mr-[40%]' />
        <div className='mt-10 md:text-2xl px-8 md:px-32 text-justify italic font-semibold text-gray-500 mb-7'>
          <p>
            Somos una familia mendocina que, cautivada por la belleza de esta
            región, decidió crear un espacio único que ahora queremos compartir
            contigo.
          </p>
        </div>
        <div className='px-10 md:text-2xl flex items-center justify-between text-justify flex-col md:flex-row text-gray-500 mb-6'>
          <div className='flex-1 '>
            <p className='md:mr-6 md:ml-16 mb-6'>
              Imagina despertar cada mañana rodeado de imponentes bosques, con
              el sonido suave de los lagos y el aire fresco de la montaña
              acariciando tu rostro. Este es nuestro sueño hecho realidad, y
              ahora queremos que sea también el tuyo.
            </p>
          </div>
          <div className='flex-1'>
            <Image src={Cerro} alt='foto uno' width={500} height={300} />
          </div>
        </div>
        <div className='w-full flex flex-col items-end md:pl-28'>
          <hr className='border-1 border-gray-300 w-full mt-3 mb-12' />
        </div>
        <div className='px-10 md:ml-16 text-justify md:text-2xl flex items-center justify-between flex-col md:flex-row text-gray-500 mb-6'>
          <Image src={Trekking} alt='foto dos' width={500} height={300}/>
          <p className='md:ml-6 mt-3 md:mr-48'>
            En nuestro complejo, diseñado y construido con amor por apasionados
            arquitectos e ingenieros, encontrarás tu refugio perfecto. Hemos
            cuidado cada detalle para que tu estancia sea inolvidable,
            ofreciéndote un equilibrio entre la comodidad moderna y la conexión
            con la naturaleza.
          </p>
        </div>
        <div className='w-full flex flex-col items-center mb-6'>
          <hr className='border-1 border-gray-300 w-full mr-[40%] mt-10 mb-12' />
          <div className='px-10 md:text-2xl flex items-center justify-between text-justify flex-col md:flex-row text-gray-500 mb-6'>
            <div className='flex-1 '>
              <p className='md:mr-6 md:ml-16 mb-6'>
                ¿Eres amante del senderismo? ¿Te apasiona correr en entornos
                naturales? ¿O prefieres explorar en mountain bike los senderos
                que se entrelazan entre los árboles? ¿Quizás leer un libro a las
                orillas de alguna de las cristalinas playas? Disfrutar también
                de la exquisita gastronomía de Bariloche puede ser una buena
                opción.
              </p>
            </div>
            <div className='flex-1'>
              <Image src={Bike} alt='foto uno' width={500} height={300} />
            </div>
          </div>
          <div className='w-full flex flex-col items-end md:pl-28'>
            <hr className='border-1 border-gray-300 w-full mt-3 mb-12' />
            <div className='px-10 text-justify md:text-2xl flex items-center justify-between flex-col md:flex-row text-gray-500 mb-6'>
              <Image src={house} alt='foto dos' width={500} height={300} />
              <p className='md:ml-6 mt-3 md:mr-48'>
                Nos enorgullece haber diseñado este espacio pensando en ti y en
                tus pasiones. Queremos que disfrutes al máximo de todas las
                maravillas que la Patagonia tiene para ofrecer.
              </p>
            </div>
            <div className='mt-10 md:text-2xl px-10 text-justify italic font-semibold text-gray-500'>
              <p>
                Ven y únete a nuestra familia, sumérgete en la magia de la
                Patagonia desde nuestro campo base. Estamos ansiosos por
                compartir contigo la pasión por la naturaleza, los deportes al
                aire libre y la vida en armonía con nuestro entorno. ¡Te
                esperamos para vivir juntos una experiencia inolvidable en este
                paraíso patagónico que ahora es también tuyo!
              </p>
            </div>
            <hr className='border-1 border-gray-300 w-full mr-[40%] mt-10 mb-28' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Nosotros;
