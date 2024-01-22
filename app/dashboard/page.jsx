import Link from "next/link";
import DashboardTable from "../ui/components/DashboardTable";
import { getSession } from "@auth0/nextjs-auth0";
import { fetchedClients, fetcher } from "../utils/fetcher";
import SearchBar from "../ui/components/SearchBar";
import ExportToExcel from "../ui/components/ExportToExcel";
import Pagination from "../ui/components/Pagination";

const Dashboard = async ({searchParams}) => {
    const query = searchParams.search || ''
    const currentPage = Number(searchParams.page) || 0
    const numberOfItems = 10;

    const offsetItems = (Number(currentPage) - 1) * numberOfItems;

    const session = await getSession();
    const userData = await fetcher(`user/login/${session.user.email}`, { method: 'GET' })
    const clientData = await fetchedClients(query, currentPage)
    const totalPages = clientData.totalPages


    return (<div className="min-h-screen flex flex-col justify-between items-center mb-28">
        <div className="flex gap-16">
            <button className="bg-[#CC8942] px-7 py-4 mt-7 text-white rounded-sm"><Link href="/dashboard/create"> Crear Cliente </Link></button>
            <button className="bg-[#CC8942] px-7 py-4 mt-7 text-white rounded-sm"><Link href="/dashboard/images"> Subir imágenes </Link></button>
        </div>
        <div className="absolute mt-44">
            <div className="flex justify-between items-center">
                <ExportToExcel />
                <SearchBar />
            </div>

            <DashboardTable query={query} currentPage={currentPage} clientData={clientData} session={session.user.email} userData={userData} />
            <Pagination totalPages={totalPages}currentPage={currentPage}/>
        </div>

    </div>);
}

export default Dashboard;