import { useParams } from "react-router-dom"

export const Map = () => {
    const { id } = useParams()
    const src = id ? `https://app.zapt.tech/#/map?placeId=-ltvysf4acgzdxdhf81y&embed={true}&poi=${id}` : 'https://app.zapt.tech/#/map?placeId=-ltvysf4acgzdxdhf81y&embed={true}'

    return (
        <div className="h-screen">
            <iframe
              src={src}
              allow="geolocation; fullscreen"
              className="rounded h-full w-full shadow-lg"
              title="Mapa da Loja"
            />
        </div>
    )
}