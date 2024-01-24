'use client'
import Link from "next/link";
import { fetchedClients } from "@/app/utils/fetcher";
import { useClient } from "@/app/context/ClientContext";
import { useEffect } from "react";



const DashboardTable = ({ session, userData, clientData }) => {
    console.log(clientData)
    const {clients, updateClients, setClients} = useClient([])
    
    useEffect(()=>{

        if(clients.length > 0 && clients.length > clientData){
            setClients(clients)        
        }else{
            setClients(clientData.content)
        }
    },[])

   
console.log(clients)

    return (
        <>
            {userData.email === session ? (
                <div>
                    <table className="text-sm rounded table">
                        <thead className="table-header-group bg-[#CC8942] text-white font-semibold">
                            <tr className="table-row">
                                <th className="table-cell p-3 text-left text-sm">Id</th>
                                <th className="table-cell p-3 text-left text-sm">Nombre</th>
                                <th className="table-cell p-3 text-left text-sm">Mail</th>
                                <th className="table-cell p-3 text-left text-sm">Nacionalidad</th>
                                <th className="table-cell p-3 text-left text-sm">Teléfono</th>
                                <th className="table-cell p-3 text-left text-sm">Fecha de Nacimiento</th>
                                <th className="table-cell p-3 text-left text-sm"> </th>
                            </tr>
                        </thead>

                        <tbody className="">
                            {clients?.length > 0 ?
                                clients.map((client, index) => (
                                    <tr key={index} className="table-row">
                                        <td className="table-cell border-grey-light border hover:bg-gray-100 p-3">{client.id}</td>
                                        <td className="table-cell border-grey-light border hover:bg-gray-100 p-3 whitespace-nowrap">{client.name}</td>
                                        <td className="table-cell border-grey-light border hover:bg-gray-100 p-3 whitespace-nowrap">{client.email}</td>
                                        <td className="table-cell border-grey-light border hover:bg-gray-100 p-3 whitespace-nowrap">{client.nationality}</td>
                                        <td className="table-cell border-grey-light border hover:bg-gray-100 p-3 whitespace-nowrap">{client.phoneNumber}</td>
                                        <td className="table-cell border-grey-light border hover:bg-gray-100 p-3 whitespace-nowrap" suppressHydrationWarning>{new Date(client.birthDate).toLocaleDateString()}</td>
                                        <td className="table-cell border-grey-light border hover:bg-gray-100 p-3 whitespace-nowrap text-[#CC8942]"><Link href="dashboard/modify/[id]" as={`dashboard/modify/${client.id}`}>Editar</Link></td>
                                    </tr>

                                ))
                                :
                                <>
                                    <tr>
                                        <td colSpan="7">
                                            <p>Aún no hay datos disponibles... <Link href="dashboard/create" className="text-[#CC8942]"> Ingresar un nuevo cliente</Link></p>
                                        </td>
                                    </tr>
                                </>

                            }

                        </tbody>
                    </table>
                    <div className="flex justify-center mt-14">
                       

                    </div>
                </div>
            ) : (
                <div>No tenés permitido el ingreso a esta sección! </div>
            )}
        </>
    );
};

export default DashboardTable;