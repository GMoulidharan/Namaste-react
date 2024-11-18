import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from "react";
import Shimmer from './Shimmer';
import { SWIGGY_API } from '../utils/constants';

const Body = () =>{
    //Local State variable - Super powerful variable-For this we use Hook which is known as use state.  
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant,setFilteredRestaurant] = useState([]);

    const[searchText,setSearchText] = useState("");
    
    //Whenever a state variable update,react tiggers a reconsiliation cycle(re-renders the components)
    console.log("body rendered");

    useEffect(() =>{
        console.log("useEffect called");
        fetchData();
    },[]);
    
    const fetchData =async () =>{
        const data =await fetch(SWIGGY_API);

        const json = await data.json();
        //Optional chaining
        setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
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