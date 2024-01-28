'use client'
const { useEffect, useState } = require("react");

export default function useFetch(url, options) {
    const[data, setData] = useState();
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState(null);


    useEffect(()=>{
        async function fecthData() {
            try{
                const response = await fetch(url,options);
                const data = await response.json();
                setData(data)
                setLoading(false)
            }catch(error){
                setError(error)
                setLoading(false)
            }
            
        }
        fecthData();
    },[])

 return {data, loading, error }
}