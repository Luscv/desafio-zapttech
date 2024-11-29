import { Link, useParams } from "react-router-dom"
import PropTypes from "prop-types";
import { useFetchInterests } from "../hooks/useFetchInterests";
import { useGetNeighbor } from "../hooks/useGetNeighbor";
import { NearbyStore } from "../components/NearbyStore";


export const StoreDetail = () => {
  const { id } = useParams()
  const { interests, loading, error } = useFetchInterests()
  const store = interests[id]
  const {nearby} = useGetNeighbor(id)

  if(loading) return <p className="h-screen text-center flex flex-col justify-center text-4xl font-bold text-blue">Carregando Loja...</p>;
  if(error) return <p className="h-screen text-center flex flex-col justify-center text-4xl font-bold text-blue">{error}</p>; 
    
  return (
      <div className="flex flex-col items-start gap-10 p-4">
          <div className="w-full">
              <div className="mb-5 transition ease-in-out delay-150 bg-blue rounded-md hover:bg-orange">
                <img src={store.media} alt="" className=" w-full h-36 object-cover"/>
              </div>
              <div className="text-lg font-semibold">{store.title}</div>
          </div>
          <div className="w-full">
              <div className="text-lg font-semibold mb-5">Nas proximidades</div>
              <div className="flex gap-4">
                {
                  nearby.map((store) => (
                    <Link key={store.id} to={`/store/${store.id}`}>
                      <NearbyStore store={store}/>
                    </Link>
                  ))
                }
              </div>  
          </div>
          <span className="mt-12 text-center w-full text-2xl font-semibold">
              <nav>
                  <Link to={`/map/${store.id}`} className="underline">Ver no Mapa</Link>
              </nav>
          </span>
      </div>
  )
}

StoreDetail.propTypes = {
  store: PropTypes.shape({
    title: PropTypes.string.isRequired, 
    description: PropTypes.string,      
    media: PropTypes.string,            
    id: PropTypes.string.isRequired,    
    coords: PropTypes.array,
  }),
};