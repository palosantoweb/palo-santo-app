export const fetcher = async (url, options) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`, options);
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Error en la solicitud: ${error.message}`);
    }
};

export const fetchedClients = async(query, currentPage) =>{
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}client?pageNumber=${currentPage}${query ? `&name=${query}`: ''}`);
            const data = await response.json();
            return data;
        } catch (error) {
            throw new Error(`Error en la solicitud: ${error.message}`);
        }

}