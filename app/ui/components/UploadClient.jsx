'use client'
import { useEffect, useRef, useState } from "react";
import { useForms } from "../../context/FormContext";
import { Label, TextInput } from "keep-react";
import { DropdownComponent } from "./DropdownComponent";
import DatePickerCustom from "./DatePickerCustom";
import Link from "next/link";
import { fetcher } from "@/app/utils/fetcher";

const UploadClient = ({ responseDataCountries, clientData, mode, id }) => {
    const nameInputRef = useRef(null);
    const [errorSubmited, setErrorSubmited] = useState(false)
    const { formState, setInfoForms, cleanFields } = useForms();
    const [responseData, setResponseData] = useState("")
    const [selectedValue, setSelectedValue] = useState(null);


    useEffect(() => {

        if (clientData && mode === 'modify') {
            setInfoForms('name', clientData.name)
            setInfoForms('email', clientData.email)
            setInfoForms('nationality', clientData.nationality)
            setInfoForms('phoneNumber', clientData.phoneNumber)
            setInfoForms('birthDate', clientData.birthDate)
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const isFormNotEmpty = Object.values(formState).some((value) => value !== '' || value !== null);

        if (mode === 'modify') {
            const sendData = async () => {
                const response = await fetcher(`client/modify/${id}`, {
                    method: 'PUT', mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formState)
                })
                if (response) {
                    setResponseData(response);
                }
            }
            sendData();
        } else {

            if (isFormNotEmpty) {
                const sendData = async () => {
                    const response = await fetcher(`client/register`, {
                        method: 'POST', mode: 'cors',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(formState)
                    })
                    if (response) {
                        setResponseData(response);
                    }
                }
                sendData();
            }
            else {
                setErrorSubmited(true)
            }

        }


    }



    return (<div className="flex flex-col items-center justify-between w-full mb-10 mx-10" >
        <h1 className="md:px-8 py-2 text-[#CC8942] text-xl md:text-4xl text-center italic font-bold mb-4"> {`${mode === 'create' ? 'Agregar Nuevo Cliente' : 'Modificar Cliente'}`}</h1>
        <form className="md:w-[50%]" onSubmit={(e) => { handleSubmit(e); cleanFields() }}>
            <div>
            {
                    mode === 'modify' ?
                    <>
                <Label htmlFor="#id-10" value="Id" />
                
                    <TextInput 
                    disabled 
                    id="#id-10"
                    color="gray"
                    value={id}
                    ref={nameInputRef} /> 
                    </>:
                    ""
                }
            </div>
            <div>
                <Label htmlFor="#id-11" value="Nombre y Apellido" />
                <TextInput
                    id="#id-11"
                    color="gray"
                    value={formState.name}
                    ref={nameInputRef}
                    required
                    handleOnChange={(e) => { setInfoForms('name', e.target.value), setErrorSubmited(false) }}
                />
            </div>
            <div>
                <Label htmlFor="#id-12" value="Email" />
                <TextInput
                    id="#id-12"
                    color="gray"
                    type="email"
                    value={formState.email}
                    required
                    handleOnChange={(e) => setInfoForms('email', e.target.value)}
                />
            </div>
            <div>
                <Label htmlFor="#id-13" value="Nacionalidad" />
                <DropdownComponent data={responseDataCountries} selectedValue={selectedValue} setSelectedValue={setSelectedValue} setInfoForms={setInfoForms} formState={formState} />
            </div>
            <div>
                <Label htmlFor="#id-14" value="Celular" />
                <TextInput
                    id="#id-14"
                    color="gray"
                    type="number"
                    value={formState.phoneNumber}
                    handleOnChange={(e) => setInfoForms('phoneNumber', e.target.value)}
                    required
                />
            </div>
            <div>
                <Label htmlFor="#id-15" value="Fecha de nacimiento" />
                <DatePickerCustom setInfoForms={setInfoForms} formState={formState} />
            </div>
            <div className="block float-left ml-4">
                <button className="bg-[#CC8942] px-7 py-4 mt-7 text-white" type="submit">{mode === 'create' ? 'Agregar Nuevo Cliente' : 'Modificar Cliente'}</button>
                <button className="bg-[#CC8942] px-7 py-4 mt-7 ml-4 text-white float-right" type='reset' onClick={() => cleanFields()}>Limpiar</button>

            </div>
        </form>

        {
            errorSubmited && <span> Por favor rellenar los campos</span>
        }
        {
            responseData !== '' && (
                <div className="text-gray-500">
                    {`El cliente ha sido ${mode==='modify'?`modificado` : `creado`} correctamente. `}
                    {mode !== 'modify' && (
                        <button
                            className="text-[#CC8942]"
                            type="reset"
                            onClick={() => {
                                setResponseData("");
                                nameInputRef.current.focus();
                                cleanFields();
                            }}
                        >
                            Cargar otro cliente
                        </button>
                    )}
                    Volver al <Link className="text-[#CC8942]" href="/dashboard">Dashboard</Link>
                </div>
            )
        }
    </div>);
}

export default UploadClient;