export const fetcher = async (url, options) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`, options);
        console.log('aaaaa', process.env.NEXT_PUBLIC_BASE_URL, url, options)
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Error en la solicitud: ${error.message}`);
    }
};

export const fetchedClients = async(query, currentPage, options) =>{
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}client${currentPage ? `?pageNumber=${currentPage}` : `?pageNumber=0` }${query ? `&name=${query}`: ''}`, options);
            const data = await response.json();
            return data;
        } catch (error) {
            throw new Error(`Error en la solicitud: ${error.message}`);
        }

}