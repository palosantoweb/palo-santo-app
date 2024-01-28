'use client'
import { useEffect, useRef, useMemo, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { Spinner } from "keep-react";


function Map() {
    const mapRef = useRef(null)
    const [loading, setLoading]= useState(true)

    useEffect(()=>{
        const initMap = async () =>{

            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
                version: 'weekly'
            });
            
            const { Map } = await loader.importLibrary('maps')

            const {Marker} = await loader.importLibrary('marker') 

            const position = {
                lat: -41.1234478,
                lng: -71.39186769999999
            }

            const mapOptions = {
                center: position,
                zoom: 16,
                mapId: 'MY_NEXTJS_MAPID'
            }

            const map = new Map(mapRef.current, mapOptions)

            const marker = new Marker({
                map: map,
                position: position
            })
        }

        initMap();
        setLoading(false)
    },[])
    if(loading) return <Spinner />

    return(<div  style={{ height: '300px', width: "60%" }} ref={mapRef} />)

}
export default Map;