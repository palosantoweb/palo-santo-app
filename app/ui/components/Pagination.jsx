'use client'
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
const Pagination = ({totalPages,  paginate=()=>{}}) => {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const currentPage =Number(searchParams.get('page')) || 0

    const createPageURL = (page) => {
        const params = new URLSearchParams();
        params.set('page', page.toString())
        return `${pathname}${params.toString}`
    }




    return (
        <div className="flex justify-center items-center">
            <Link
                className={`border-2 border-[#CC8942] p-2 rounded ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''}`}
                href={createPageURL(currentPage - 1)}
                disabled={ currentPage <= 1}
            >
                Anterior
            </Link>
            <span>{`Página ${currentPage}`}</span>
            <Link
                className={`border-2 border-[#CC8942] p-2 rounded ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''}`}
                href={createPageURL(currentPage + 1)}
                disabled={currentPage>=totalPages}

           >
                Siguiente
            </Link>
        </div>);
}

export default Pagination;