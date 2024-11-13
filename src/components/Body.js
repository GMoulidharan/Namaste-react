import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from "react";
import Shimmer from './Shimmer';
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
        const data =await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        //Optional chaining
        setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    //conditional rendering
    
    
    return listOfRestaurant.length === 0 ?<Shimmer />:(
    <div className='body'>   
          
        <div className="filter">
            <div className='search'>
                <input type='text' className='search-box' value={searchText}
                onChange={(event) =>{
                    setSearchText(event.target.value)
                }}/>
                <button onClick={() =>{
                    //Filter the restaurant cards and update the UI
                    //searchText
                    console.log(searchText);

                    const filteredRestaurant = listOfRestaurant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                    setFilteredRestaurant(filteredRestaurant);

                }}>search</button>
            </div>
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
               filteredRestaurant.map((restaurant) =>(
                <RestaurantCard key={restaurant.info.id} resData= {restaurant}/>//Function returing a JSX
               ))  
            }
                   
        </div>
    </div>
    )
};

export default Body;