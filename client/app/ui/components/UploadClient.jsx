'use client'
import { useEffect, useState } from "react";
import { useForms } from "../../context/FormContext";
import Link from "next/link";
import CommonForm from "./commonForm";

const UploadClient = ({ responseDataCountries, clientData, mode, id }) => {
    const [errorSubmited, setErrorSubmited] = useState(false)
    const {formState, setInfoForms, cleanFields } = useForms();
    const [responseData, setResponseData] = useState("")



    useEffect(() => {
        if (clientData && mode === 'modify') {
            setInfoForms('name', clientData.name)
            setInfoForms('email', clientData.email)
            setInfoForms('nationality', clientData.nationality)
            setInfoForms('phoneNumber', clientData.phoneNumber)
            setInfoForms('birthDate', clientData.birthDate)
        }
    }, [])




    return (<div className="flex flex-col items-center justify-between w-full mb-10 mx-10" >
        <h1 className="md:px-8 py-2 text-[#CC8942] text-xl md:text-4xl text-center italic font-bold mb-4"> {`${mode === 'create' ? 'Agregar Nuevo Cliente' : 'Modificar Cliente'}`}</h1>
        <CommonForm formState={formState} setInfoForms={setInfoForms} cleanFields={cleanFields} responseDataCountries={responseDataCountries} mode={mode} id={id}/>
        {
            responseData !== '' && (
                <div className="text-gray-500">
                    {`El cliente ha sido ${mode==='modify'?`modificado` : `creado`} correctamente. `}
                    Volver al <Link className="text-[#CC8942]" href="/dashboard">Dashboard</Link>
                </div>
            )
        }
    </div>);
}

export default UploadClient;