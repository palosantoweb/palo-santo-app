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
                <div>
                    <Table>
                        <Table.Head>
                            <Table.HeadCell>Id</Table.HeadCell>
                            <Table.HeadCell>Mail</Table.HeadCell>
                            <Table.HeadCell>Nombre</Table.HeadCell>
                            <Table.HeadCell>Nacionalidad</Table.HeadCell>
                            <Table.HeadCell>Teléfono</Table.HeadCell>
                            <Table.HeadCell>Fecha de Nacimiento</Table.HeadCell>
                        </Table.Head>
                        <Table.Body>
                            {loadingCustomers ? 
                            <Table.Row>
                                <Table.Cell>
                                <Spinner /> 
                                </Table.Cell>
                            </Table.Row>
                         :
                                dataCustomers?.length > 0 ?
                                    dataCustomers.map((client, index) => (
                                        console.log(client) /*<Table.Cell key={index}>{client}</Table.Cell>*/
                                    )) :
                                    <Table.Row>
                                        <Table.Cell>
                                            <p>Aún no hay datos disponibles... <Link href="dashboard/create" className="text-[#CC8942]"> Ingresar un nuevo cliente</Link></p>
                                        </Table.Cell>
                                    </Table.Row>

                            }
                            {errorCustomers ?
                                <Table.Row>
                                    <Table.Cell>
                                        <p> Ha ocurrido un error...</p>
                                    </Table.Cell>
                                </Table.Row>
                                : <></>}
                        </Table.Body>
                    </Table>
                </div>
            ) : (
                <div>No tenés permitido el ingreso a esta sección! </div>
            )}
        </>
    );
};

export default DashboardTable;