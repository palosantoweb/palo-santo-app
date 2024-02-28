'use client'
import { fetcher } from '../../utils/fetcher';
import * as XLSX from 'xlsx';


const ExportToExcel = () => {
    
    const fetchingData = async() =>{
        const resp = await fetcher('/client', {method: 'GET'})
        return resp;
    }

    const handleExportExcel = async() => {
        const dataCustomers = await fetchingData();
        const ws = XLSX.utils.json_to_sheet(dataCustomers.content);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Clientes');
        const excelArrayBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });

        const excelBlob = new Blob([excelArrayBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

        const fileName = 'clientes.xlsx';

        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(excelBlob);
        downloadLink.download = fileName;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };
    return (     <div className="flex justify-between items-center mb-2">
                        <button className="border-2 border-[#CC8942] p-2 rounded" onClick={handleExportExcel}>
                            Exportar Excel
                        </button>

                    </div> );
}
 
export default ExportToExcel;