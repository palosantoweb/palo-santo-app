'use client'
import DatePickerCustom from "@/app/components/DatePickerCustom";
import { DropdownComponent } from "@/app/components/DropdownComponent";
import { useForms } from "@/app/context/FormContext";
import useFetch from "@/app/hooks/useFetch";
import {Label, TextInput } from "keep-react";
import { useState } from "react";


const CreateCustomer = () => {
    const { data: dataCountry, loading: loadingCountry, error: errorCountry } = useFetch(`https://restcountries.com/v3.1/all`, { method: 'GET' })
    const [errorSubmited, setErrorSubmited] = useState(false)
    const { formState, setInfoForms, cleanFields } = useForms();
    const [selectedValue, setSelectedValue] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const isFormNotEmpty = Object.values(formState).some((value) => value !== '' || value !== null);

        if(isFormNotEmpty){
            const sendData = async () => {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}client/register`, {method: 'POST', mode: 'cors', 
                headers: {
                    'Content-Type': 'application/json', 
                  },
                  body: JSON.stringify(formState)})
                console.log(response)

            }
            sendData();
        }
        else {
            setErrorSubmited(true)
        }


    }

    return (<>
        <div className="h-screen flex flex-col items-center justify-center mt-6">
            <div className="flex flex-col items-center justify-between w-full mb-10 mx-10" >
                <h1 className="md:px-8  py-2 text-[#CC8942] text-xl md:text-4xl text-center italic font-bold mb-4"> Agregar Nuevo Cliente</h1>
                <form className="md:w-[50%]" onSubmit={(e) => handleSubmit(e)}>
                    <div>
                        <Label htmlFor="#id-11" value="Nombre" />
                        <TextInput
                            id="#id-11"
                            color="gray"
                            value={formState.name}
                            handleOnChange={(e) => {setInfoForms('name', e.target.value), setErrorSubmited(false)}}
                        />
                    </div>
                    <div>
                        <Label htmlFor="#id-12" value="Email" />
                        <TextInput
                            id="#id-12"
                            color="gray"
                            type="email"
                            value={formState.email}
                            handleOnChange={(e) => setInfoForms('email', e.target.value)}
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
                            handleOnChange={(e) => setInfoForms('phoneNumber', e.target.value)}
                        />
                    </div>
                    <div>
                        <Label htmlFor="#id-13" value="Fecha de nacimiento" />
                        <DatePickerCustom setInfoForms={setInfoForms} formState={formState} />
                    </div>
                    <div className="block float-left ml-4">
                    <button className="bg-[#CC8942] px-7 py-4 mt-7 text-white" type="submit">Crear Cliente</button>
                    <button className="bg-[#CC8942] px-7 py-4 mt-7 ml-4 text-white float-right" type='reset' onClick={()=>cleanFields()}>Limpiar</button>

                    </div>
                </form>

                {
                    errorSubmited && <span> Por favor rellenar los campos</span>
                }
            </div>
        </div>

    </>);
}

export default CreateCustomer;