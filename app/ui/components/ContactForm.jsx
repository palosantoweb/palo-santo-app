'use client'

import { useForms } from "@/app/context/FormContext";
import { toast } from "react-toastify";
import CommonForm from "./commonForm";

const ContactForm = ({responseDataCountries, mode}) => {
    const { formState, setInfoForms, cleanFields } = useForms();

    
  const handleSubmit = async (e) => {
    e.preventDefault();
    const isFormNotEmpty = Object.values(formState).some((value) => value !== '' || value !== null);

    if(isFormNotEmpty){
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              access_key: process.env.NEXT_PUBLIC_FORMS,
              ...formState,
            }),
          });
      
          const data = await response.json();
          if(data.success){
            toast.success('¡Tu mensaje ha sido enviado correctamente, te responderemos a la brevedad!')

          }else{
            toast.error('Ups, algo ha salido mal, intenta nuevamente')
          }
            }
    
  };


    return (<>
      <div className="flex flex-col items-center w-full mb-10" >
            <CommonForm handleSubmit={handleSubmit} formState={formState} setInfoForms={setInfoForms} cleanFields={cleanFields} responseDataCountries={responseDataCountries} mode={mode}/>
            </div>
 </>  );
}
 
export default ContactForm;