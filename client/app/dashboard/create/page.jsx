import UploadClient from "@/app/ui/components/UploadClient";
import Link from "next/link";


const CreateCustomer = async () => {
    const response = await fetch(`https://restcountries.com/v3.1/all`, { method: 'GET' })
    const responseDataCountries = await response.json();

    return (<>
        <div className="min-h-screen ">
            <div className='bg-[#CC8942] w-[15%] mt-5 ml-6  py-4 rounded-md'>
                <p className='text-white flex items-center justify-center md:text-xl text-sm'>
                    <Link href='/dashboard' className="pl-4">Volver al dashboard</Link>
                </p>
            </div>
            <div className="flex flex-col items-center justify-center">
            <UploadClient responseDataCountries={responseDataCountries} mode="create" />

            </div>
        </div>

    </>);
}

export default CreateCustomer;