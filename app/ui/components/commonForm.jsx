'use client'

import { useRef, useState } from "react";
import CustomDropdown from "./DropdownComponent";
import DatePickerCustom from "./DatePickerCustom";
import { uploadClient } from "@/app/lib/actions";
import { toast } from "react-toastify";

const CommonForm = ({ formState, cleanFields = () => { }, setInfoForms = () => { }, responseDataCountries, mode = 'client', id}) => {
    const [selectedValue, setSelectedValue] = useState(null);

    return (
        <form className="md:w-[50%]" action={async (formData)=> { await uploadClient(formData, formState.nationality, formState.consultation, mode, id); toast.success( mode==='client'? 'El formulario se ha enviado exitosamente' : mode==='create'? 'El cliente se ha creado correctamente': "el cliente ha sido correctamente modificado"); cleanFields()}}>
            <div>
                {
                    mode === 'modify' ?
                        <>
                            <label htmlFor="#id-10" value="Id" />

                            <input
                                disabled
                                id="#id-10"
                                name="id"
                                value={id}
                               />
                        </> :
                        ""
                }
            </div>
            <div>
                <label htmlFor="#id-11">Nombre y Apellido</label>
                <input
                    id="#id-11"
                    name="name"
                    value={formState.name}
                    onChange={(e) => { setInfoForms('name', e.target.value) }}
                    required

                />
            </div>
            <div>
                <label htmlFor="#id-12"> Email </label>
                <input
                    id="#id-12"
                    name="email"
                    value={formState.email}
                    onChange={(e) => { setInfoForms('email', e.target.value) }}
                    required

                />
            </div>
            <div>
                <label htmlFor="#id-13"> Celular </label>
                <input
                    id="#id-13"
                    color="gray"
                    name="phoneNumber"
                    value={formState.phoneNumber}
                    onChange={(e) => { setInfoForms('phoneNumber', e.target.value) }}
                    required
                />
            </div>
            <div>
                <label htmlFor="#id-13"> Nacionalidad</label>
                <CustomDropdown data={responseDataCountries} selectedValue={selectedValue} setSelectedValue={setSelectedValue} setInfoForms={setInfoForms} formState={formState} />
            </div>
            <div>
                <label htmlFor="#id-13"> Fecha de Nacimiento </label>
                <DatePickerCustom setInfoForms={setInfoForms} formState={formState} />
            </div>
            {
                mode === 'client' &&
                <div className="mt-8">
                <textarea
                    className="border border-gray-300 rounded-md p-1 w-full"
                    id="consultation"
                    placeholder="Dejanos tu consulta.."
                    value={formState.consultation}
                    onChange={(e) => { setInfoForms('consultation', e.target.value) }}
                    rows={4}
                    required
                />
            </div>
            }
            
            <button type="submit" className="bg-[#CC8942] px-7 py-4 mt-7 text-white">Enviar</button>
            
        </form>);
}

export default CommonForm;