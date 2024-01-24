'use client'
import { useEffect, useRef, useState } from "react";
import { useForms } from "../../context/FormContext";
import Link from "next/link";
import { fetcher } from "@/app/utils/fetcher";
import CommonForm from "./commonForm";
import { toast } from "react-toastify";

const UploadClient = ({ responseDataCountries, clientData, mode, id }) => {
    const nameInputRef = useRef(null);
    const [errorSubmited, setErrorSubmited] = useState(false)
    const { formState, setInfoForms, cleanFields } = useForms();
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
                        toast.success('El cliente ha sido agregado correctamente')
                    }
                }
                sendData();
            }
            else {
                setErrorSubmited(true)
                toast.error('ups, algo ha salido mal, prueba nuevamente')
            }

        }


    }



    return (<div className="flex flex-col items-center justify-between w-full mb-10 mx-10" >
        <h1 className="md:px-8 py-2 text-[#CC8942] text-xl md:text-4xl text-center italic font-bold mb-4"> {`${mode === 'create' ? 'Agregar Nuevo Cliente' : 'Modificar Cliente'}`}</h1>
        <CommonForm handleSubmit={handleSubmit} formState={formState} setInfoForms={setInfoForms} cleanFields={cleanFields} responseDataCountries={responseDataCountries} mode={mode} id={id} nameInputRef={nameInputRef}/>
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