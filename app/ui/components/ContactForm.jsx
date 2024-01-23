'use client'

import { useForms } from "@/app/context/FormContext";
import { Label, Spinner, TextInput, Textarea } from "keep-react";
import { DropdownComponent } from "./DropdownComponent";
import { useEffect, useState } from "react";
import DatePickerCustom from "./DatePickerCustom";

const ContactForm = ({responseDataCountries}) => {

    console.log(responseDataCountries)
    const { formState, setInfoForms, cleanFields } = useForms();
    const [errorSubmited, setErrorSubmited] = useState(false)
    const [selectedValue, setSelectedValue] = useState(null);
    
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
              access_key: "287fab4b-3013-42d4-99a5-fc5c2d844333",
              ...formState,
            }),
          });
      
          const data = await response.json();
    }
    cleanFields()
  };


    return (<>
      <div className="flex flex-col items-center w-full mb-10" >
                <form className="md:w-[50%]" onSubmit={(e)=>handleSubmit(e)}>
                    <div>
                        <Label htmlFor="#id-11" value="Nombre y Apellido" />
                        <TextInput
                            id="#id-11"
                            color="gray"
                            value={formState.name}
                            handleOnChange={(e) => { setInfoForms('name', e.target.value), setErrorSubmited(false) }}
                            required

                        />
                    </div>
                    <div>
                        <Label htmlFor="#id-12" value="Email" />
                        <TextInput
                            id="#id-12"
                            color="gray"
                            value={formState.email}
                            handleOnChange={(e) => { setInfoForms('email', e.target.value), setErrorSubmited(false) }}
                            required

                        />
                    </div>
                    <div>
                        <Label htmlFor="#id-13" value="Celular" />
                        <TextInput
                            id="#id-13"
                            color="gray"
                            value={formState.phoneNumber}
                            handleOnChange={(e) => { setInfoForms('phoneNumber', e.target.value), setErrorSubmited(false) }}
                            required
                        />
                    </div>
                    <div>
                        <Label htmlFor="#id-13" value="Nacionalidad" />
                       <DropdownComponent data={responseDataCountries} selectedValue={selectedValue} setSelectedValue={setSelectedValue} setInfoForms={setInfoForms} formState={formState} />
                    </div>
                    <div>
                        <Label htmlFor="#id-13" value="Fecha de nacimiento" />
                         <DatePickerCustom setInfoForms={setInfoForms} formState={formState} />
                    </div>
                    <div className="mt-12">
                        <textarea
                            id="consultation"
                            placeholder="Dejanos tu consulta.."
                            value={formState.consultation}
                            onChange={(e) => { setInfoForms('consultation', e.target.value), setErrorSubmited(false) }}
                            rows={4}
                            required
                        />
                    </div>
                    <button type="submit" className="bg-[#CC8942] px-7 py-4 mt-7 text-white">Enviar</button>
                </form>
            </div>
 </>  );
}
 
export default ContactForm;