import { useEffect, useState } from "react"
import { findNeighbor } from "../utils/findNeighbor"
import { useFetchInterests } from "../hooks/useFetchInterests"; 


export const useGetNeighbor = (id) => {
    const { interests } = useFetchInterests()
    const [nearby, setNearby] = useState([])
    
    useEffect(() => {
        const stores = findNeighbor(interests, id)
        const nearbyData = stores.map((store) => ({
            ...store,
            ...interests[store.id2]
        }))
        setNearby(nearbyData)
        
    }, [id, interests])
    
    return{nearby}
}