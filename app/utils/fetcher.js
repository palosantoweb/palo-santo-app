import axios from "axios";

const BASE_URL = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASE_URL : process.env.NEXT_PUBLIC_BASE_URL_DEV


export const fetcher = async (url, options) => {
    try {
        let res = undefined
        let method = options ? options.method : "GET"
        switch (method) {
            case "GET": {
                res = await axios.get(`${BASE_URL}${url}`, {headers: {
                    'Cache-Control': 'no-cache',
                    'Pragma': 'no-cache',
                    'Expires': '0',
                  },});
                break;
            }
            case "POST": {
                res = await axios.post(`${BASE_URL}${url}`, options?.body, {headers: {
                    'Cache-Control': 'no-cache',
                    'Pragma': 'no-cache',
                    'Expires': '0',
                  },});
                break;
            }
            case "PUT": {
                res = await axios.put(`${BASE_URL}${url}`, options?.body, {headers: {
                    'Cache-Control': 'no-cache',
                    'Pragma': 'no-cache',
                    'Expires': '0',
                  },});
                break;
            }
            case "DELETE": {
                res = await axios.delete(`${BASE_URL}${url}`, {headers: {
                    'Cache-Control': 'no-cache',
                    'Pragma': 'no-cache',
                    'Expires': '0',
                  },});
                break;
            }
            default: {
                res = await axios.get(`${BASE_URL}${url}`, {headers: {
                    'Cache-Control': 'no-cache',
                    'Pragma': 'no-cache',
                    'Expires': '0',
                  },});
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
        const response = await fetch(`${BASE_URL}client${currentPage ? `?pageNumber=${currentPage}` : `?pageNumber=0`}${query ? `&name=${query}` : ''}`, options);
        const json = await response.json()
        return json
    } catch (error) {
        throw new Error(`Error en la solicitud: ${error.message}`);
    }

}