import DashboardTable from "../components/DashboardTable";
import { getSession } from "@auth0/nextjs-auth0";

const Dashboard = async() => {
    const session = await getSession();

    return (<div className="min-h-screen  flex flex-col justify-between items-center"><DashboardTable session={session.user.email}/></div>);
}

export default Dashboard;