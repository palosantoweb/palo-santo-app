'use client'
import { Spinner, Table } from "keep-react";
import useFetch from "../hooks/useFetch";

const DashboardTable = ({session}) => {
    const {data, loading, error} = useFetch(`${process.env.NEXT_PUBLIC_BASE_URL}user/login/${session}`, {method: 'GET'})

    if(loading){
        return <Spinner />
    }

    if(error){
        return <h1>Ha ocurrido un error</h1>
    }

    return ( <>{
        data.email === session ? (<div>

            <Table>
                <Table.Head>HOLA</Table.Head>
            </Table>
        </div>) : (<div>No tenés permitido el ingreso a esta sección! </div>)
    }</> );
}
 
export default DashboardTable;