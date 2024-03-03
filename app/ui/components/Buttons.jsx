'use client'
import { useEffect, useState } from "react";
import { fetcher } from "@/app/utils/fetcher";
import { useSession } from "next-auth/react";
import Link from "next/link";


const Buttons = () => {
    const { data: session, status } = useSession()
    const [userData, setUserData] = useState();

    useEffect(() => {
        const fetchUser = async () => {
            if (status === 'authenticated') {
                const userDataFetch = await fetcher(`user/login/${session.user.email}`, { method: 'GET' })
                setUserData(userDataFetch)
            }

        }
        fetchUser();

    }, [status])

    return (

        <>
            <button className={` px-7 py-4 mt-7 text-white rounded ${status === "unauthenticated" ? "bg-[#de9a52]" : "bg-[#CC8942]"}`} disabled={status === "unauthenticated" || status === "loading"}><Link href={`${status==='authenticated' ? "/dashboard/create" : "/"}`}> Crear Cliente </Link></button>
            <button className={` px-7 py-4 mt-7 text-white rounded ${status === "unauthenticated" ? "bg-[#de9a52]" : "bg-[#CC8942]"}`} disabled={status === "unauthenticated" || status === "loading"}><Link href={`${status==='authenticated' ? "/dashboard/images" : "/"}`}> Subir imágenes </Link></button>
        </>
    );

}

export default Buttons;