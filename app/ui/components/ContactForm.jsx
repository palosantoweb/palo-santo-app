'use client'

import { useForms } from "../../context/FormContext";
import CommonForm from "./commonForm";

const ContactForm = ({responseDataCountries, mode}) => {
    const { formState, setInfoForms, cleanFields } = useForms();



    return (<>
      <div className="flex flex-col items-center w-full mb-10" >
            <CommonForm formState={formState} setInfoForms={setInfoForms} cleanFields={cleanFields} responseDataCountries={responseDataCountries} mode={mode}/>
            </div>
 </>  );
}
 
export default ContactForm;