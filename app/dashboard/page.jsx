import DashboardTable from "../components/DashboardTable";
import { getSession } from "@auth0/nextjs-auth0";

const Dashboard = async() => {
    const session = await getSession();

    return (<><DashboardTable session={session.user.email}/></>);
}

export default Dashboard;