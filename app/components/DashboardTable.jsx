'use client'
import { Spinner, Table } from "keep-react";
import useFetch from "../hooks/useFetch";
import Link from "next/link";

const DashboardTable = ({ session }) => {
    const { data: userData, loading: userLoading, error: userError } = useFetch(`${process.env.NEXT_PUBLIC_BASE_URL}user/login/${session}`, { method: 'GET' });
    const { data: dataCustomers, loading: loadingCustomers, error: errorCustomers } = useFetch(`${process.env.NEXT_PUBLIC_BASE_URL}/client`, { method: 'GET' });

    if (userLoading) {
        return <Spinner />;
    }

    if (userError) {
        return <h1>Ha ocurrido un error</h1>;
    }

    return (
        <>
            {userData.email === session ? (
                <div className="overflow-x-auto my-auto">
                    <div></div>
                    <table className="text-sm rounded flex md:table">
                        <thead className="md:table-header-group bg-[#CC8942] text-white font-semibold">
                        <tr className="grid grid-cols-1 md:table-row">
                            <th className="md:table-cell p-3 text-left text-sm">Id</th>
                            <th className="md:table-cell p-3 text-left text-sm">Mail</th>
                            <th className="md:table-cell p-3 text-left text-sm">Nombre</th>
                            <th className="md:table-cell p-3 text-left text-sm">Nacionalidad</th>
                            <th className="md:table-cell p-3 text-left text-sm">Teléfono</th>
                            <th className="md:table-cell p-3 text-left text-sm">Fecha de Nacimiento</th>
                            <th className="md:table-cell p-3 text-left text-sm"> </th>
                        </tr>
                        </thead>

                        <tbody className="">
                            {loadingCustomers ? 
                            <tr className="">
                                <td>
                                <Spinner /> 
                                </td>
                            </tr>
                         :
                                dataCustomers?.length > 0 ?
                                    dataCustomers.map((client, index) => (
                                    <tr key={index} className="grid grid-cols-1 md:table-row">
                                      <td className="md:table-cell border-grey-light border hover:bg-gray-100 p-3">{client.id}</td>
                                      <td className="md:table-cell border-grey-light border hover:bg-gray-100 p-3 whitespace-nowrap">{client.email}</td>
                                      <td className="md:table-cell border-grey-light border hover:bg-gray-100 p-3 whitespace-nowrap">{client.name}</td>
                                      <td className="md:table-cell border-grey-light border hover:bg-gray-100 p-3 whitespace-nowrap">{client.nationality}</td>
                                      <td className="md:table-cell border-grey-light border hover:bg-gray-100 p-3 whitespace-nowrap">{client.phoneNumber}</td>
                                      <td className="md:table-cell border-grey-light border hover:bg-gray-100 p-3 whitespace-nowrap">{new Date(client.birthDate).toLocaleDateString()}</td>
                                      <td className="md:table-cell border-grey-light border hover:bg-gray-100 p-3 whitespace-nowrap text-[#CC8942]"><Link href="dashboard/modify/[id]" as={`dashboard/modify/${client.id}`}>Editar</Link></td>
                                      </tr>

                                    )) :
                                    <tr>
                                        <td>
                                            <p>Aún no hay datos disponibles... <Link href="dashboard/create" className="text-[#CC8942]"> Ingresar un nuevo cliente</Link></p>
                                        </td>
                                    </tr>

                            }
                            {errorCustomers ?
                                <tr>
                                    <td>
                                        <p> Ha ocurrido un error...</p>
                                    </td>
                                </tr>
                                : <></>}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div>No tenés permitido el ingreso a esta sección! </div>
            )}
        </>
    );
};

export default DashboardTable;