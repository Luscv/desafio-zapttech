import { Link, useParams } from "react-router-dom"


const mockStores = {
    "1": {
      id: "1",
      name: "Loja A",
      description: "Detalhes da Loja A",
      nearby: [
        { id: "2", name: "Loja B", distance: 500 },
        { id: "3", name: "Loja C", distance: 1200 },
      ],
    },
    "2": {
      id: "2",
      name: "Loja B",
      description: "Detalhes da Loja B",
      nearby: [
        { id: "1", name: "Loja A", distance: 500 },
        { id: "3", name: "Loja C", distance: 800 },
      ],
    },
    "3": {
      id: "3",
      name: "Loja C",
      description: "Detalhes da Loja C",
      nearby: [
        { id: "1", name: "Loja A", distance: 1200 },
        { id: "2", name: "Loja B", distance: 800 },
      ],
    },
  };

export const StoreDetail = () => {
    const { id } = useParams()
    const store = mockStores[id]
    if (!store) return <p className="h-screen text-center flex flex-col justify-center text-4xl font-bold text-blue">Loja não encontrada.</p>;
    return (
        <div className="flex flex-col items-start gap-10 p-4">
            <div className="w-full">
                <div className="p-12 mb-5 transition ease-in-out delay-150 bg-blue rounded-md hover:bg-orange">/photo</div>
                <div className="text-lg font-semibold">{store.name}</div>
            </div>
            <div className="w-full">
                <div className="text-lg font-semibold mb-5">Nas proximidades</div>
                <div className="flex gap-4">
                    {store.nearby.map((nearby) => (
                        <div key={nearby.id} className="p-10 transition ease-in-out delay-150 bg-blue rounded-md hover:bg-orange">{nearby.name} – {nearby.distance} metros</div>
                    ))}
                </div>  
            </div>
            <span className="mt-6 text-center w-full text-xl font-semibold">
                
                <nav>
                    <Link to="/map">Ver no Mapa</Link>
                </nav>
                
            </span>
        </div>
    )
}