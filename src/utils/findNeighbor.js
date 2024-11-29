import { calcDistance } from "./calcDistance"

export const findNeighbor = (data, id) => {
    const store = Object.entries(data)
    const distances = []
    const store1 = data[id]

    for(let i = 0; i < store.length; i++){
        const [id2, store2] = store[i]
        const distance = calcDistance(store1.coords, store2.coords)
        distances.push({id2, distance})
    }

    distances.sort((a,b) => a.distance - b.distance)


    return distances.slice(1, 3).map(({id2, distance}) => ({
        id2,
        distance
    }))
}