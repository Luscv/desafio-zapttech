import { Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home"
import { Map } from "../components/Map"
import { StoreDetail } from "../pages/StoreDetail"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/store/:id" element={<StoreDetail/>}/>
            <Route path="/map" element={<Map/>} />
        </Routes>
    )
}