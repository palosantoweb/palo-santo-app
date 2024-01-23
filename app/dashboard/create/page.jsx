import UploadClient from "@/app/ui/components/UploadClient";


const CreateCustomer = async() => {
    const response = await fetch(`https://restcountries.com/v3.1/all`, { method: 'GET' })
    const responseDataCountries = await response.json();

    return (<>
        <div className="min-h-screen flex flex-col items-center justify-center">
            <UploadClient responseDataCountries={responseDataCountries} mode="create"/>
        </div>

    </>);
}

export default CreateCustomer;