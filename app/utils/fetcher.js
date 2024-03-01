import axios from "axios";

const BASE_URL = process.env.NODE_ENV === 'production' ? `${process.env.NEXT_PUBLIC_BASE_URL}api/routes` : process.env.NEXT_PUBLIC_BASE_URL


export const fetcher = async (url, options) => {
    try {
        let res = undefined
        let method = options ? options.method : "GET"
        switch (method) {
            case "GET": {
                res = await axios.get(`${BASE_URL}/${url}`, { headers: options?.headers });
                break;
            }
            case "POST": {
                res = await axios.post(`${BASE_URL}/${url}`, options?.body, { headers: options?.headers });
                break;
            }
            case "PUT": {
                res = await axios.put(`${BASE_URL}/${url}`, options?.body, { headers: options?.headers });
                break;
            }
            case "DELETE": {
                res = await axios.delete(`${BASE_URL}/${url}`, { headers: options?.headers });
                break;
            }
            default: {
                res = await axios.get(`${BASE_URL}/${url}`);
                break;
            }
        }
        return res.data
    } catch (error) {
        throw new Error(`Error en la solicitud: ${error.message}`);
    }
};

export const fetchedClients = async (query, currentPage, options) => {
    try {
        console.log("FETCHED")
        const response = await fetch(`${BASE_URL}/client${currentPage ? `?pageNumber=${currentPage}` : `?pageNumber=0`}${query ? `&name=${query}` : ''}`, options);
        console.log("FETCHED RES", response)
        const json = await response.json()
        console.log("FETCHED RESJSON", json)
        return json
    } catch (error) {
        throw new Error(`Error en la solicitud: ${error.message}`);
    }

}