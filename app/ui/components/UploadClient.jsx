'use client'
import { useEffect, useState } from "react";
import { useForms } from "../../context/FormContext";
import Link from "next/link";
import CommonForm from "./commonForm";
import { fetcher } from "@/app/utils/fetcher";

const UploadClient = ({ responseDataCountries, mode, id }) => {
    const [errorSubmited, setErrorSubmited] = useState(false)
    const {formState, setInfoForms, cleanFields } = useForms();
    const [responseData, setResponseData] = useState("")




    useEffect(() => {
        const assignFields = () => {
            return new Promise(async (resolve, reject) => {
                try {
                    if (mode === 'modify') {
                        const clientData = await fetcher(`client/${id}`, { cache: "no-store" });
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

    console.log(responseData)


    return (<div className="flex flex-col items-center justify-between w-full mb-10 mx-10" >
        <h1 className="md:px-8 py-2 text-[#CC8942] text-xl md:text-4xl text-center italic font-bold mb-4"> {`${mode === 'create' ? 'Agregar Nuevo Cliente' : 'Modificar Cliente'}`}</h1>
        <CommonForm formState={formState} setInfoForms={setInfoForms} cleanFields={cleanFields} responseDataCountries={responseDataCountries} mode={mode} id={id}/>
    </div>);
}

export default UploadClient;