'use client'

import Image from "next/image";
import search from '../../../public/search.svg';
import { useSearchParams,usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const SearchBar = () => {

const searchParams =  useSearchParams();
const pathname = usePathname();
const {replace} = useRouter();


const handleSearch = useDebouncedCallback((e) => {
    const { value } = e.target;
    const params = new URLSearchParams(searchParams)
    
    if(value){
        params.set('search',  value)
    }else{
        params.delete('search')
    }

    replace(`${pathname}?${params.toString()}`)

    
  }, 300);


    return (  
        <div className="flex items-center">
        <Image src={search} width={32} alt="search" />
        <input placeholder=" Búsqueda por cliente" className="w-full" onChange={handleSearch} defaultValue={searchParams.get('search')?.toString()} />

    </div>
    );
}
 
export default SearchBar;