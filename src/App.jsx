import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom"
import { Home } from "./pages/Home"
import { Map } from "./components/Map"
import { StoreDetail } from "./pages/StoreDetail"

function Layout() {
    const location = useLocation()
    const isHomeRendered = location.pathname === "/"
    return (
        
        <div className="py-10 h-screen flex justify-center">
        
                <div className="bg-light-grey w-4/12 flex flex-col justify-between rounded-md">  
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/store/:id" element={<StoreDetail/>}/>
                    <Route path="/map" element={<Map/>} />
                </Routes>  
                <div className="text-center text-lg">
                    <nav className="flex">
                        {isHomeRendered && <Link className="w-6/12 py-8 transition ease-in-out delay-100 bg-blue text-white rounded-bl-md hover:bg-orange" to="/map">Mapa</Link>}
                        <Link className={`${isHomeRendered ? "w-6/12 rounded-br-md" : "w-full rounded-b-md"} py-8 transition ease-in-out delay-100 bg-blue text-white hover:bg-orange`} to="/">Lista</Link>
                    </nav>
                </div>    
                </div>
            </div>
        
        
    )
}

function App() {
    return (
        <Router>
            <Layout/>
        </Router>
        
    )
}

export default App
