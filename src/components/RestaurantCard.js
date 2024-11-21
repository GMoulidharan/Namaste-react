import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({name,cloudinaryImageId,cuisines,avgRating,id}) =>{
    
    return(
        <Link
            to={"/restaurants/" +id}
            key={id}
        >
            <div className="m-2 p-4 bg-white w-60   min-h-60 flex flex-col items-center rounded-xl shadow-sm hover:scale-105 hover:bg-gray-100">
                <img
                    className="rounded-lg w-[200px] h-[200px]"
                    src={CDN_URL+cloudinaryImageId}
                    alt='food-img'
                />
                <div className="mt-4 w-48 h-44 items-start truncate">
                    <h2 className="font-bold text-lg text-ellipsis">{name}</h2>
                    <p className="mt-4 text-ellipsis">{cuisines.join(", ")}</p>
                    <p className="mt-4 text-ellipsis">{avgRating}</p>
                </div>
            </div>
        </Link>
        
    );
};

export default RestaurantCard;