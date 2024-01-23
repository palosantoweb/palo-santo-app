'use client'
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
const Pagination = ({ totalPages }) => {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const currentPage = Number(searchParams.get('page')) || 0
    let finalPage = currentPage

    const createPageURL = (page) => {
        const params = new URLSearchParams();
        params.set('page', page.toString())
        return `${pathname}?${params.toString()}`
    }




    return (
        <div className="flex justify-center items-center">
            <Link
                className={`border-2 border-[#CC8942] p-2 rounded ${currentPage === 0 ? 'cursor-not-allowed opacity-50 pointer-events-none' : ''}`}
                href={createPageURL(currentPage - 1)}
                aria-disabled={currentPage === 0}
                tabIndex={currentPage === 1 ? -1 : undefined}
            >
                Anterior
            </Link>
            <span>{`Página ${finalPage += 1}`}</span>
            <Link
                className={`border-2 border-[#CC8942] p-2 rounded ${finalPage >= totalPages ? 'cursor-not-allowed opacity-50 pointer-events-none' : ''}`}
                href={finalPage >= totalPages ? createPageURL(currentPage) : createPageURL(currentPage + 1)}
                aria-disabled={finalPage >= totalPages}
                tabIndex={finalPage >= totalPages ? -1 : undefined}
            >
                Siguiente
            </Link>
        </div>);
}

export default Pagination;