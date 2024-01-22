'use client'
import { useRef, useState } from "react";
import { useForms } from "../../context/FormContext";
import { Label, TextInput } from "keep-react";
import { DropdownComponent } from "./DropdownComponent";
import DatePickerCustom from "./DatePickerCustom";
import Link from "next/link";

const UploadClient = ({fetchData}) => {
    const nameInputRef = useRef(null);
    const [errorSubmited, setErrorSubmited] = useState(false)
    const { formState, setInfoForms, cleanFields } = useForms();
    const [responseData, setResponseData] = useState("")
    const [selectedValue, setSelectedValue] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const isFormNotEmpty = Object.values(formState).some((value) => value !== '' || value !== null);

        if (isFormNotEmpty) {
            const sendData = async () => {
                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}client/register`, {
                    method: 'POST', mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formState)
                })
                if(response){
                setResponseData(response);
                }
            }
            sendData();
        }
        else {
            setErrorSubmited(true)
        }


    }



    return ( <div className="flex flex-col items-center justify-between w-full mb-10 mx-10" >
                <h1 className="md:px-8  py-2 text-[#CC8942] text-xl md:text-4xl text-center italic font-bold mb-4"> Agregar Nuevo Cliente</h1>
                <form className="md:w-[50%]" onSubmit={(e) =>{ handleSubmit(e); cleanFields()}}>
                    <div>
                        <Label htmlFor="#id-11" value="Nombre y Apellido" />
                        <TextInput
                            id="#id-11"
                            color="gray"
                            value={formState.name}
                            ref={nameInputRef}
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
                            handleOnChange={(e) => setInfoForms('email', e.target.value)}
                        />
                    </div>
                    <div>
                        <Label htmlFor="#id-12" value="Nacionalidad" />
                        <DropdownComponent data={fetchData} selectedValue={selectedValue} setSelectedValue={setSelectedValue} setInfoForms={setInfoForms} />
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
                        <button className="bg-[#CC8942] px-7 py-4 mt-7 ml-4 text-white float-right" type='reset' onClick={() => cleanFields()}>Limpiar</button>

                    </div>
                </form>

                {
                    errorSubmited && <span> Por favor rellenar los campos</span>
                }
                { responseData !== '' && <div className="text-gray-500"> El cliente ha sido agregado correctamente <button className="text-[#CC8942]" onClick={() => { setResponseData(""); nameInputRef.current.focus(); cleanFields()}}>Cargar otro cliente</button> Volver al <Link className="text-[#CC8942]" href="/dashboard">Dashboard</Link></div>
                }
            </div> );
}
 
export default UploadClient;