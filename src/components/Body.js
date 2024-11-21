import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from "react";
import Shimmer from './Shimmer';
import useOnlineStatus from '../utils/useOnlineStatus';
import useSwiggyApi from '../utils/useSwiggyApi';
const Body = () => {

    const { restaurantListData, isLoading, error } = useSwiggyApi();
    const [searchText, setSearchText] = useState("");
    const [filteredData, setFilteredData] = useState([]);//Define state var for filtered data


      
    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
        return (
            <h1>
                Looks like you're offline!! Please check your internet connection.
            </h1>
        );
    }


    const handleSearch = () => {
        const filteredResults = restaurantListData.filter((res) => {
            return res.info.name.toLowerCase().includes(searchText.toLowerCase());
        });

        setFilteredData(filteredResults); //Update fiteredData state with search results.
    };

    const handleTopRestaurant = () => {
        const filteredTopResults = restaurantListData.filter((res) => res.info.avgRating > 4.2);
        console.log("Top Rated Filtered Results: ", filteredTopResults);
        setFilteredData(filteredTopResults);
    };


    return (
        <>
      {isLoading ? (
        <Shimmer />
      ) : error ? (
        <div>Error fetching data: {error.message}</div>
      ) : (
        <div>
          <div className="m-4">
            <input
              type="text"
              name="search-box"
              className="shadow-lg border"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              className="m-2 px-2 py-1 bg-blue-200 rounded-md"
              id="search-btn"
              onClick={handleSearch}
            >
              Search
            </button>
            <button
              className="m-2 px-2 py-1 bg-green-200 rounded-md"
              onClick={handleTopRestaurant}
            >
              Top Rated Restaurant
            </button>
          </div>
          <div className="flex m-4 p-4 flex-wrap justify-evenly bg-orange-100 shadow-sm rounded-lg">
            {searchText.length > 0 && filteredData.length > 0 ? (//If the user is searching (searchText) and results (filteredData) exist: Show the filtered list
              filteredData.map((restaurant) => (
                <RestaurantCard
                  {...restaurant.info}
                  key={restaurant.info.id}
                />
              ))
            ) : restaurantListData.length === 0 ? (//Else, if the full list (restaurantListData) is empty
              <p>No restaurants found.</p>
            ) : (
              restaurantListData.map((restaurant) => (//Otherwise Show the complete list of restaurants 
              
                <RestaurantCard
                  {...restaurant.info}
                  key={restaurant.info.id}
                />
              ))
            )}
          </div>
        </div>
      )}
    </>
    );
};

export default Body;