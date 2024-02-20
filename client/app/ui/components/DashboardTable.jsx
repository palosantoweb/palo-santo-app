'use client'
import Link from "next/link";




const DashboardTable = ({ session, userData, clientData }) => {

    return (
        <>
            {userData.email === session ? (
                <>
                    <div className="rounded-sm hidden md:block shadow">
                        <table className="text-sm rounded md:table">
                            <thead className="md:table-header-group bg-[#CC8942] text-white font-semibold">
                                <tr className="md:table-row">
                                    <th className="md:table-cell p-3 text-left text-sm">Id</th>
                                    <th className="md:table-cell p-3 text-left text-sm">Nombre</th>
                                    <th className="md:table-cell p-3 text-left text-sm">Mail</th>
                                    <th className="md:table-cell p-3 text-left text-sm">Nacionalidad</th>
                                    <th className="md:table-cell p-3 text-left text-sm">Teléfono</th>
                                    <th className="md:table-cell p-3 text-left text-sm">Fecha de Nacimiento</th>
                                    <th className="md:table-cell p-3 text-left text-sm"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {clientData?.content.length > 0 ? (
                                    clientData.content.map((client, index) => (
                                        <tr key={index} className="md:table-row">
                                            <td className="md:table-cell border-grey-light border hover:bg-gray-100 p-3">{client.id}</td>
                                            <td className="md:table-cell border-grey-light border hover:bg-gray-100 p-3 whitespace-nowrap">{client.name}</td>
                                            <td className="md:table-cell border-grey-light border hover:bg-gray-100 p-3 whitespace-nowrap">{client.email}</td>
                                            <td className="md:table-cell border-grey-light border hover:bg-gray-100 p-3 whitespace-nowrap">{client.nationality}</td>
                                            <td className="md:table-cell border-grey-light border hover:bg-gray-100 p-3 whitespace-nowrap">{client.phoneNumber}</td>
                                            <td className="md:table-cell border-grey-light border hover:bg-gray-100 p-3 whitespace-nowrap" suppressHydrationWarning>
                                                {new Date(client.birthDate).toLocaleDateString()}
                                            </td>
                                            <td className="md:table-cell border-grey-light border hover:bg-gray-100 p-3 whitespace-nowrap text-[#CC8942]">
                                                <Link href={`dashboard/modify/${client.id}`}>Editar</Link>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="7">
                                            <p>
                                                Aún no hay datos disponibles... <Link href="dashboard/create" className="text-[#CC8942]">Ingresar un nuevo cliente</Link>
                                            </p>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    <div className="flex flex-col gap-4 md:hidden">
                        {clientData.content.length > 0 ? clientData.content.map((client, index) => (
                            <div key={index} className="bg-white p-4 rounded-md shadow">
                                <div className="flex flex-col space-y-2 text-sm">
                                    <div><span className="font-semibold">ID:</span> {client.id}</div>
                                    <div> <span className="font-semibold">Nombre:</span> {client.name}</div>
                                    <div> <span className="font-semibold">Email: </span> {client.email}</div>
                                    <div><span className="font-semibold">Nacionalidad: </span>  {client.nationality}</div>
                                    <div><span className="font-semibold">Teléfono: </span>{client.phoneNumber}</div>
                                    <div suppressHydrationWarning><span className="font-semibold" >Fecha de Nacimiento:</span> {new Date(client.birthDate).toLocaleDateString()}</div>
                                    <Link className=" hover:bg-gray-100 text-[#CC8942]" href={`dashboard/modify/${client.id}`}>Editar</Link>
                                </div>
                            </div>
                        )) :
                            <p>
                                Aún no hay datos disponibles... <Link href="dashboard/create" className="text-[#CC8942]">Ingresar un nuevo cliente</Link>
                            </p>
                        }
                    </div>
                    <div className="flex justify-center mt-14"></div>
                </>
            ) : (
                <div>No tenés permitido el ingreso a esta sección!</div>
            )}
        </>
    );
};

export default DashboardTable;