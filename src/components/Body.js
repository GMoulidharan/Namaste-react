import RestaurantCard from './RestaurantCard';
import resList from '../utils/mockData';
import { useState } from "react";

const Body = () =>{

    //Local State variable - Super powerful variable-For this we use Hook which is known as use state.  
    const [listOfRestaurant, setListOfRestaurant] = useState(resList);

    /*
    Array destructuring.
    
    const arr  = useState(resList);
    //const [listOfRestaurant, setListOfRestaurant] =arr
    const listOfRestaurant = arr[0];
    const listOfRestaurant = arr[1]; 
    */ 

    return(<div className='body'>   
        {/* <div className='search'>
            Search
        </div> */}
        <div className="filter">
                <button className='filter-btn' onClick={()=>{
                    //Filter  logic here                    
                    const filteredList = listOfRestaurant.filter((res) => res.data.avgRating > 4);
                    setListOfRestaurant(filteredList);
                }}>
                    Top Rated restaurant
                </button>
        </div>
        <div className='restaurant-container'>
            {
               listOfRestaurant.map((restaurant) =>(
                <RestaurantCard key={restaurant.data.id} resData= {restaurant}/>//Function returing a JSX
               ))  
            }
                   
        </div>
    </div>
    )
};

export default Body;