
const BASE_URL = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASE_URL : process.env.NEXT_PUBLIC_BASE_URL_DEV


export const fetcher = async (url, options) => {
    try {
        let res = undefined
        let method = options ? options.method : "GET"
        switch (method) {
            case "GET": {
                res = await fetch(`${BASE_URL}${url}`,{method: options.method, next: {revalidate: 10}});
                break;
            }
           case "POST": {
                res = await fetch(`${BASE_URL}${url}`, {body:options?.body, method: options.method, next: {revalidate: 10}});
                break;
            }
            case "PUT": {
                res = await fetch(`${BASE_URL}${url}`, {body:options?.body, method: options.method, next: {revalidate: 10}});
                break;
            }
            case "DELETE": {
                res = await fetch(`${BASE_URL}${url}`,{method: options.method});
                break;
            }
            default: {
                res = await fetch(`${BASE_URL}${url}`, {method: options.method, next: {revalidate: 10}});
                break;
            }
        }
        let response = await res.json();
        return response;
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