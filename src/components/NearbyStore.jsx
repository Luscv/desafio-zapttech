import PropTypes from "prop-types";

export const NearbyStore = ({store}) => {
    return(
        <div className="border p-3 flex gap-3 text-white transition ease-in-out delay-150 bg-blue rounded-md hover:bg-orange">
            <div className="flex justify-center">
                <img src={store.media} alt={store.title} className=" w-20 h-20 object-cover rounded"/>
            </div>
            <div>
                <span className="text-md">{store.title}</span>
                <p className="font-thin">{store.distance} metros</p>
            </div>
        </div>
    )
}

NearbyStore.propTypes = {
    store: PropTypes.shape({
      title: PropTypes.string.isRequired, 
      description: PropTypes.string,      
      media: PropTypes.string,            
      id: PropTypes.string.isRequired,
      distance: PropTypes.number.isRequired,    
    }).isRequired,
};