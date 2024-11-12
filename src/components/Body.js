import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from "react";
import Shimmer from './Shimmer';
const Body = () =>{

    //Local State variable - Super powerful variable-For this we use Hook which is known as use state.  
    const [listOfRestaurant, setListOfRestaurant] = useState([]);

    useEffect(() =>{
        console.log("useEffect called");
        fetchData();
    },[]);
    
    const fetchData =async () =>{
        const data =await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();

        console.log(json);
        //Optional chaining
        setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if(listOfRestaurant.length === 0){
        return <Shimmer />
        
    }
    
    return(
    <div className='body'>   
        {/* <div className='search'>
            Search
        </div> */}
        <div className="filter">
                <button className='filter-btn' onClick={()=>{
                    //Filter  logic here                    
                    const filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4.2);
                    setListOfRestaurant(filteredList);
                }}>
                    Top Rated restaurant
                </button>
        </div>
        <div className='restaurant-container'>
            {
               listOfRestaurant.map((restaurant) =>(
                <RestaurantCard key={restaurant.info.id} resData= {restaurant}/>//Function returing a JSX
               ))  
            }
                   
        </div>
    </div>
    )
};

export default Body;