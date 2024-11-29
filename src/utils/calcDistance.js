import { pixelsToMeters } from "./pixelsToMeters"

export const calcDistance = ([x1, y1], [x2,y2]) => {
    const distance = pixelsToMeters(Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2))
    return distance
}