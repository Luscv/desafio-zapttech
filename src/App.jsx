import { BrowserRouter as Router, Link, useLocation } from "react-router-dom"
import { AppRoutes } from "./routes/AppRoutes"


function Layout() {
    const location = useLocation()
    const isHomeRendered = location.pathname === "/"
    return (
        
        <div className="py-10 h-screen flex justify-center">
        
                <div className="bg-light-grey w-4/12 flex flex-col justify-between rounded-md">  
                    <AppRoutes/>
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
