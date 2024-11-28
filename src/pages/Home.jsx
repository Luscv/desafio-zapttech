import { StoreMinimized } from "../components/StoreMinimized"
import { Link } from "react-router-dom"


export const Home = () => {
    const mockStores = [
        { id: "1", name: "Loja A", description: "Loja A - Descrição da loja" },
        { id: "2", name: "Loja B", description: "Loja B - Descrição da loja" },
        { id: "3", name: "Loja C", description: "Loja C - Descrição da loja" },
      ];

    return (
        <div className="h-screen flex flex-col justify-between">
            <div className="p-6">
                {mockStores.map((store) => (
                    <Link key={store.id} to={`/store/${store.id}`}>
                        <StoreMinimized />
                    </Link>        
                ))}
            </div>
            
        </div>
    )
}