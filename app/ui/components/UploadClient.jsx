'use client'
import { useEffect, useState } from "react";
import { useForms } from "../../context/FormContext";
import Link from "next/link";
import CommonForm from "./commonForm";
import { fetcher } from "@/app/utils/fetcher";
import { useSession } from "next-auth/react";

const UploadClient = ({ responseDataCountries, mode, id }) => {
    const {data:session, status }= useSession();
    const [errorSubmited, setErrorSubmited] = useState(false)
    const {formState, setInfoForms, cleanFields } = useForms();
    const [responseData, setResponseData] = useState("")



    useEffect(() => {
        const assignFields = () => {
            return new Promise(async (resolve, reject) => {
                try {
                    if (mode === 'modify') {
                        const clientData = await fetcher(`client/${id}`);
                        setResponseData(clientData)
    
                        resolve(clientData);
                    } else {
                        resolve(null); 
                    }
                } catch (error) {
                    console.error("Error al obtener los datos del cliente:", error);
                    reject(error); 
                }
            });
        };
    assignFields();


    }, [])

    useEffect(()=>{
        if(mode === 'modify' && responseData){

            setInfoForms('name', responseData.name);
            setInfoForms('email', responseData.email);
            setInfoForms('nationality', responseData.nationality);
            setInfoForms('phoneNumber', responseData.phoneNumber);
            setInfoForms('birthDate', responseData.birthDate);

        }
    }, [responseData])



    return (
    status=== 'authenticated' ? (
    <div className="flex flex-col items-center justify-between w-full mb-10 mx-10" >
        <h1 className="md:px-8 py-2 text-[#CC8942] text-xl md:text-4xl text-center italic font-bold mb-4"> {`${mode === 'create' ? 'Agregar Nuevo Cliente' : 'Modificar Cliente'}`}</h1>
        <CommonForm formState={formState} setInfoForms={setInfoForms} cleanFields={cleanFields} responseDataCountries={responseDataCountries} mode={mode} id={id} status={status}/>
    </div>): (<h1>No tenés permitido el ingreso a esta sección </h1>));
}

export default UploadClient;