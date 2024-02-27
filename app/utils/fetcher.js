import axios from "axios";

const BASE_URL = process.env.NODE_ENV === 'production' ? "api/routes" : process.env.NEXT_PUBLIC_BASE_URL


export const fetcher = async (url, options) => {
    try {
        console.log(`${BASE_URL}/${url}`)
        const obj = await axios(`${BASE_URL}/${url}`, options);
        return obj
    } catch (error) {
        throw new Error(`Error en la solicitud: ${error.message}`);
    }
};

export const fetchedClients = async (query, currentPage, options) => {
    try {
        const response = await fetch(`${BASE_URL}/client${currentPage ? `?pageNumber=${currentPage}` : `?pageNumber=0`}${query ? `&name=${query}` : ''}`, options);
        return await response.json();
    } catch (error) {
        throw new Error(`Error en la solicitud: ${error.message}`);
    }

}