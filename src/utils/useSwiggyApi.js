import { useState, useEffect } from "react";
import { SWIGGY_API } from "./constants";
const useSwiggyApi =() =>{
    const [restaurantListData, setRestaurantListData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const[error, setError] = useState(null);

    useEffect(() =>{
        const fetchData =async () =>{
            setIsLoading(true);//set loading state to true
            setError(null);// clear any previous error
    
            try{
                const data =await fetch(SWIGGY_API);
                const json = await data.json();
            //Optional chaining
                setRestaurantListData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            } catch(error){
                setError(error);// set error state if fetching fails
            }finally{
                setIsLoading(false);// set loading state to false after fetching(success or failure)
            }   
        };

        fetchData();
    },[]);
    return {restaurantListData, isLoading, error};
}

export default useSwiggyApi;