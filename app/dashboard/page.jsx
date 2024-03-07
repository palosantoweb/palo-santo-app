import Link from "next/link";
import DashboardTable from "../ui/components/DashboardTable";
import { fetchedClients, fetcher } from "../utils/fetcher";
import SearchBar from "../ui/components/SearchBar";
import ExportToExcel from "../ui/components/ExportToExcel";
import Pagination from "../ui/components/Pagination";
import Buttons from "../ui/components/Buttons";

const Dashboard = async ({searchParams}) => {
    const query = searchParams.search || ''
    const currentPage = Number(searchParams.page) 

    return (<div className="min-h-screen">
        <div className="flex flex-col justify-between items-center">
        <div className="flex gap-16">
       <Buttons />
        </div>
        <div className="mt-10">
            <div className="flex justify-between items-center">
                <ExportToExcel />
                <SearchBar />
            </div>

            <DashboardTable query={query} currentPage={currentPage}/>
        </div>
        </div>
    </div>);
}

export default Dashboard;