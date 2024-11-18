import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({name,cloudinaryImageId,cuisines,avgRating,id}) =>{
    
    return(
        <Link
            to={"/restaurants/" +id}
            key={id}
        >
            <div className='res-card'>
                <img
                    src={CDN_URL+cloudinaryImageId}
                    alt='food-img'
                />
                <div className="description">
                    <h2>{name}</h2>
                    <p>{cuisines.join(", ")}</p>
                    <p>{avgRating}</p>
                </div>
            </div>
        </Link>
        
    );
};

export default RestaurantCard;