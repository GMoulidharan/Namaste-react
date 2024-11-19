import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu= () =>{

    const { resId } = useParams();
    
    const resInfo = useRestaurantMenu(resId); 

    if(resInfo === null ) return <Shimmer />;
    
    const {name, cuisines, costForTwoMessage, avgRatingString,cloudinaryImageId, id 
    } = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);
    return  (
        <div className="restaurant-menu">
            <div className="restaurant-card">
                <div>
                    <img
                        id="res-image"
                        src={CDN_URL +cloudinaryImageId }
                        alt={name}
                    >
                    </img>
                </div>
                <div className="res-info">
                    <h1>{name}</h1>
                    <p>{costForTwoMessage}</p>
                    <p>{avgRatingString}</p>
                    <p>{cuisines.join(", ")}</p>
                </div>
            </div>

            <div className="res-item">
                {itemCards.map((item, index) =>(
                    <li
                        className="item-li"
                        key={index}
                    >
                        <div className="res-item-details">
                            <h3>{item.card.info.name}</h3>
                            <p className="item-header item rating">
                                {item.card.info.ratings.aggregatedRating.rating}
                            </p>
                            <p className="item-header item-description">
                                {item.card.info.description}
                            </p>
                        </div>
                        <div className="item-img">
                            <img
                                src={CDN_URL + item.card.info.imageId}
                                alt={item.card.info.name}
                            >
                            </img>
                        </div>
                    </li>        
                )) 
            }
            </div>
        </div>
    );
};
export default RestaurantMenu;