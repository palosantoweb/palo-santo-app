import Link from "next/link";
import DashboardTable from "../components/DashboardTable";
import { getSession } from "@auth0/nextjs-auth0";

const Dashboard = async() => {
    const session = await getSession();

    return (<div className="min-h-screen flex flex-col justify-between items-center">
        <div className="flex gap-16">
        <button className="bg-[#CC8942] px-7 py-4 mt-7 text-white rounded-sm"><Link href="/dashboard/create"> Crear Cliente </Link></button>
        <button className="bg-[#CC8942] px-7 py-4 mt-7 text-white rounded-sm"><Link href="/dashboard/images"> Subir imágenes </Link></button>
        </div>
        <div className="absolute mt-44">
        <DashboardTable session={session.user.email}/>
        </div>

        
        </div>);
}

export default Dashboard;