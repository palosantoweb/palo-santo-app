'use client'
import DatePickerCustom from "@/app/components/DatePickerCustom";
import { DropdownComponent } from "@/app/components/DropdownComponent";
import { useForms } from "@/app/context/FormContext";
import useFetch from "@/app/hooks/useFetch";
import { DatePicker, Label, TextInput } from "keep-react";
import { useState } from "react";


const CreateCustomer = () => {
    const { data: dataCountry, loading: loadingCountry, error: errorCountry } = useFetch(`https://restcountries.com/v3.1/all`, { method: 'GET' })
    const { formState, setInfoForms } = useForms();
    const [selectedValue, setSelectedValue] = useState(null);

    return (<>
        <div className="h-screen flex items-center justify-center ">
            <div className="flex flex-col items-center w-full mb-10" >
                <form className="md:w-[50%]">
                    <div>
                        <Label htmlFor="#id-11" value="Nombre" />
                        <TextInput
                            id="#id-11"
                            color="gray"
                            value={formState.name}
                            onChange={(e) => setInfoForms('name', e.target.value)}
                        />
                    </div>
                    <div>
                        <Label htmlFor="#id-12" value="Email" />
                        <TextInput
                            id="#id-12"
                            color="gray"
                            type="email"
                            value={formState.email}
                            onChange={(e) => setInfoForms('email', e.target.value)}
                        />
                    </div>
                    <div>
                        <Label htmlFor="#id-12" value="Nacionalidad" />
                        <DropdownComponent data={dataCountry} loading={loadingCountry} error={errorCountry} selectedValue={selectedValue} setSelectedValue={setSelectedValue} setInfoForms={setInfoForms} />
                    </div>
                    <div>
                        <Label htmlFor="#id-13" value="Celular" />
                        <TextInput
                            id="#id-13"
                            color="gray"
                            type="number"
                            value={formState.phoneNumber}
                            onChange={(e) => setInfoForms('phoneNumber', e.target.value)}
                        />
                    </div>
                    <div>
                        <Label htmlFor="#id-13" value="Fecha de nacimiento" />
                        <DatePickerCustom setInfoForms={setInfoForms} formState={formState}/>
                    </div>
                    <button className="bg-[#CC8942] px-7 py-4 mt-7 text-white">Crear Cliente</button>
                    <button className="bg-[#CC8942] px-7 py-4 mt-7 ml-4 text-white">Limpiar</button>
                </form>
            </div>
        </div>

    </>);
}

export default CreateCustomer;