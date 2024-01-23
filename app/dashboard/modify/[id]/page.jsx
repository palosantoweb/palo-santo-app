import UploadClient from "@/app/ui/components/UploadClient";
import { fetcher } from "@/app/utils/fetcher";

const ModifyClient = async({params}) => {
   const id = params.id
   const clientData = await fetcher(`client/${id}`)
   const response = await fetch(`https://restcountries.com/v3.1/all`, { method: 'GET' })
   const responseDataCountries = await response.json()
    

    return ( <div className="min-h-screen mt-2 flex flex-col items-center justify-center">
        <UploadClient clientData={clientData} responseDataCountries={responseDataCountries} mode="modify" id={id}/>
    </div> );
}
 
export default ModifyClient;