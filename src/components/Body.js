import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from "react";
import Shimmer from './Shimmer';
import { SWIGGY_API } from '../utils/constants';
import useOnlineStatus from '../utils/useOnlineStatus';
import useSwiggyApi from '../utils/useSwiggyApi';
const Body = () =>{
    
    const{listOfRestaurant, filteredRestaurant} = useSwiggyApi();
    const[searchText,setSearchText] = useState("");
    
    
    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false){ 
        return(
            <h1>
                Looks like you're offline!! Please check your internet connection.
            </h1>
        );
    }
    //conditional rendering
    
    
    return listOfRestaurant.length === 0 ?(<Shimmer />):(
    <>             
        <div className="filter">            
            <input 
                type='text'                  name='search-box' 
                className="search-box"
                value={searchText}
                onChange={(event) =>{
                    setSearchText(event.target.value)
                }}
            />
            <button 
                id="search-btn"
                onClick={() =>{
                console.log(searchText);
                const filteredRestaurant = listOfRestaurant.filter((res) =>{
                    return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                });

                setFilteredRestaurant(filteredRestaurant);

                }}
                >
                    Search
                </button>
            
                <button 
                    className='filter-btn' 
                    onClick={()=>{
                    //Filter  logic here                    
                    let filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4.2);
                    setListOfRestaurant(filteredList);
                    }}
                >
                    Top Rated restaurant
                </button>
        </div>
        <div className='restaurant-container'>
            {
               filteredRestaurant.map((restaurant) =>{
                console.log(restaurant);
                return(
                    <RestaurantCard 
                        {...restaurant.info}
                        key={restaurant.info.id}
                    />
                );
               })  
            }
                   
        </div>
    </>
    );
};

export default Body;