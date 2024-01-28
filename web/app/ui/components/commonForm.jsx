'use client'

import { useRef, useState } from "react";
import CustomDropdown from "./DropdownComponent";
import DatePickerCustom from "./DatePickerCustom";

const CommonForm = ({ formState, cleanFields = () => { }, handleSubmit = () => { }, setInfoForms = () => { }, responseDataCountries, mode = 'client', id}) => {
    const [selectedValue, setSelectedValue] = useState(null);

    return (
        <form className="md:w-[50%]" onSubmit={(e) => { handleSubmit(e), cleanFields() }}>
            <div>
                {
                    mode === 'modify' ?
                        <>
                            <label htmlFor="#id-10" value="Id" />

                            <input
                                disabled
                                id="#id-10"
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
                    value={formState.name}
                    onChange={(e) => { setInfoForms('name', e.target.value) }}
                    required

                />
            </div>
            <div>
                <label htmlFor="#id-12"> Email </label>
                <input
                    id="#id-12"
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