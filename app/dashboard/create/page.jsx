import UploadClient from "@/app/ui/components/UploadClient";
import { fetcher } from "@/app/utils/fetcher";


const CreateCustomer = async() => {
    const fetchData = await fetch(`https://restcountries.com/v3.1/all`, { method: 'GET' })

    return (<>
        <div className="h-screen flex flex-col items-center justify-center mt-6">
            <UploadClient fetchData={fetchData}/>
        </div>

    </>);
}

export default CreateCustomer;