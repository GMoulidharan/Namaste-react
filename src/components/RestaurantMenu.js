import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {

    const { resId } = useParams();
    const [isExpanded, setIsExpanded] = useState(false);
    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage, avgRatingString, cloudinaryImageId, id
    } = resInfo?.cards[2]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    console.log(itemCards);
    return (
        <div className="m-40">
            <div className="flex m-2 p-4 bg-orange-200 shadow-lg">
                <div>
                    <img
                        className="w-48 h-48"
                        id="res-image"
                        src={CDN_URL + cloudinaryImageId}
                        alt={name}
                    >
                    </img>
                </div>
                <div className="m-4 p-4">
                    <h1 className="text-4xl font-bold">{name}</h1>
                    <p className="text-xl font-semibold">{costForTwoMessage}</p>
                    <p className="text-xl font-semibold">{cuisines.join(", ")}</p>
                    <p>{avgRatingString}</p>
                </div>
            </div>

            <div className="m-4 p-8 border flex flex-col items-center rounded-md">
                {itemCards.map((item, index) => (
                    <li
                        className="flex justify-between m-4 p-4 border shadow-md bg-orange-100 min-w-full max-w-60 overflow-hidden rounded-md"
                        key={index}
                    >
                        <div className="p-4">
                            <h3 className="text-lg font-medium">{item.card.info.name}</h3>
                            <p className="item-header item rating">
                                {item.card.info.ratings.aggregatedRating.rating}
                            </p>
                            <div className="relative">
                                <p
                                    className={`description overflow-hidden text-ellipsis ${isExpanded ? "line-clamp-none" : "line-clamp-2"
                                        }`}
                                >
                                    {item.card.info.description}
                                </p>
                                <button
                                    className="text-blue-500 mt-2 underline"
                                    onClick={() => setIsExpanded(!isExpanded)}
                                >
                                    {isExpanded ? "less" : "...more"}
                                </button>
                            </div>
                        </div>
                        <div
                            className="w-48 h-48 object-cover">
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