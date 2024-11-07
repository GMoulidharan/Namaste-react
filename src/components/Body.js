import RestaurantCard from './RestaurantCard';
import resList from '../utils/mockData';
import { useState } from "react";

const Body = () =>{

    //Local State variable - Super powerful variable-For this we use Hook which is known as use state.  
    const [listOfRestaurantSV] = useState([]);


    //Normal JS variable
    let listOfRestaurant = [
      {
        data: {
          id: "73011",
          name: "KFC",   
          cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/5/932a324d-81d2-49c3-9202-720301692995_96819.JPG",
          cuisines: ["American", "Snacks", "Biryani"],
          costForTwo: 30000,
          deliveryTime: 31,
          avgRating: "4.5",          
        },        
      },
      {
        data: {
          id: "73012",
          name: "Dominos",   
          cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/5/932a324d-81d2-49c3-9202-720301692995_96819.JPG",
          cuisines: ["American", "Snacks", "Biryani"],
          costForTwo: 30000,
          deliveryTime: 31,
          avgRating: "3.8",          
        },        
      },
      {
        data: {
          id: "73013",
          name: "Mc D",   
          cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/5/932a324d-81d2-49c3-9202-720301692995_96819.JPG",
          cuisines: ["American", "Snacks", "Biryani"],
          costForTwo: 30000,
          deliveryTime: 31,
          avgRating: "4.1",          
        },        
      }
    ];

    return(<div className='body'>   
        {/* <div className='search'>
            Search
        </div> */}
        <div className="filter">
                <button className='filter-btn' onClick={()=>{
                    //Filter  logic here
                    listOfRestaurant = listOfRestaurant.filter((res) => res.data.avgRating > 4);
                    console.log(listOfRestaurant);
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