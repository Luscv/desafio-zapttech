import { StoreMinimized } from "../components/StoreMinimized"
import { Link } from "react-router-dom"
import { useFetchInterests } from "../hooks/useFetchInterests";


export const Home = () => {

    const { interests, loading, error } = useFetchInterests()

    const interestArray = Object.values(interests)

    if(loading) return <p className="h-screen text-center flex flex-col justify-center text-4xl font-bold text-blue">Carregando Lojas...</p>;
    if(error) return <p className="h-screen text-center flex flex-col justify-center text-4xl font-bold text-blue">{error}</p>; 
    
    return (
        <div className="h-screen flex flex-col justify-between">
            <div className="p-6 h-[80vh] overflow-y-hidden hover:overflow-y-scroll">
                {interestArray.map((interest) => (
                    <Link key={interest.id} to={`/store/${interest.id}`}>
                        <StoreMinimized store={interest}/>
                    </Link>        
                ))}
            </div>
            
        </div>
    )
}