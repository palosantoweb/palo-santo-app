import dynamic from "next/dynamic"
import { useMemo } from "react"


const Maps = () => {
    const Map = useMemo(() => dynamic(
        () => import('./Map'),
        { 
          loading: () => <p>A map is loading</p>,
          ssr: false
        }
      ), [])
    
      return <Map />

  }
  export default Maps