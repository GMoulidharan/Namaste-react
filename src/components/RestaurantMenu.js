import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {

    const { resId } = useParams();  
    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(null);// manages which category (accordion section) is currently expanded.

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage, avgRatingString, cloudinaryImageId, id
    } = resInfo?.cards[2]?.card?.card?.info;

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        c => 
            c?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    
    const updateActiveIndex = (newIndex) =>{
        // updates showIndex when a user interacts with a category.
        if(newIndex === showIndex){
            setShowIndex(null);
        }else{
            setShowIndex(newIndex);
        }
    }

    return (
        <div className="lg:m-32 md:m-16 m-8">
            <div className="flex flex-wrap items-center m-2 p-2 lg:p-4 bg-orange-200 shadow-lg rounded-lg">
                <div>
                    <img
                        className="lg:w-48 lg:h-48 md:w-36 md:h-36 w-24 h-24 rounded-md"
                        id="res-image"
                        src={CDN_URL + cloudinaryImageId}
                        alt={name}
                    >
                    </img>
                </div>
                <div className="m-4 p-4">
                    <h1 className="lg:text-4xl md:text-2xl text-xl font-bold">{name}</h1>
                    <p className="text-xl font-semibold">{costForTwoMessage}</p>
                    <p className="text-xl font-semibold">{cuisines.join(", ")}</p>
                    <p>{avgRatingString}</p>
                </div>
            </div>

            {/* Categories Accordion */}
            {categories.map((category, index) => (
            <RestaurantCategory 
            data= {category?.card?.card}
            key={category?.card?.card?.title}
            showItem={index === showIndex} //ensures only one section is expanded at a time.
            updateIndex={() => updateActiveIndex(index)}//responsible for updating the active section.
            />
            ))
            }
        </div>
    );
};
export default RestaurantMenu;