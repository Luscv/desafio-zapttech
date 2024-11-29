import PropTypes from "prop-types";

export const StoreMinimized = ({ store }) => {
    return (
        
        <div className="py-4 flex gap-3 border-b border-dark-grey">
            <div className="flex flex-col justify-center">
                <img src={store.media} alt={store.title} className=" w-20 h-20 object-cover rounded"/>
            </div>
            <div>
                <span className="text-xl font-bold">{store.title}</span>
                <p dangerouslySetInnerHTML={{__html: store.description}}></p>
            </div>
        </div>   
    )
}

StoreMinimized.propTypes = {
    store: PropTypes.shape({
      title: PropTypes.string.isRequired, 
      description: PropTypes.string,      
      media: PropTypes.string,            
      id: PropTypes.string.isRequired,    
    }).isRequired,
};