import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (resData) =>{
    // console.log(resData);
    const {name,cloudinaryImageId,cuisines,avgRating,id} = resData;
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
                    <p className="mt-4 text-ellipsis">{Array.isArray(cuisines) ? cuisines.join(", ") : "N/A"}</p>
                    <p className="mt-4 text-ellipsis">{avgRating}</p>
                </div>
            </div>
        </Link>
        
    );
};

//Higher order component - Takes restaurant card as input , return me a new component , enhanced res card.
//Input =  Restaurant card
//Output = RestaurantCard ==> ResaturantCardPromoted

//This HOC will generate a RestaurantCard for us 

export const withDiscountOffer = (RestaurantCard) =>{
    return (props) =>{
        return (
            <div>
                <div className="absolute m-2 p-2 bg-green-200 text-green-900 font-extrabold  leading-5 rounded-lg">{props.aggregatedDiscountInfoV3.header}  {props.aggregatedDiscountInfoV3.subHeader}</div>
                
                <RestaurantCard {...props}/>
            </div>
        );
    };
};
export default RestaurantCard;