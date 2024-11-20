import { useState, useEffect } from "react";
import { SWIGGY_API } from "./constants";
const useSwiggyApi =() =>{
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant,setFilteredRestaurant] = useState([]);

    useEffect(() =>{
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

    return {listOfRestaurant, filteredRestaurant};
}

export default useSwiggyApi;