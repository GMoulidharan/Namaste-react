import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
const ItemList = ({items}) =>{
    
    const dispatch = useDispatch();

    const handleAddItem =(item) =>{
        //Dispatches an action
        dispatch(addItem(item));
    }

    return (        
        <div>
            {items.map((item) => (
            <div 
                data-testid="foodItems"
                key={item.card.info.id}
                className="flex p-2 my-2 border-b-2 rounded-xl text-left"     
            >
                <div className="w-full p-4">
                    <span className="text-xl font-semibold">
                        {item.card.info.name}
                    </span>
                    <span className="block text-lg font-medium">
                        ₹{" "}
                        {item.card.info.price ? item.card.info.price/100 :item.card.info.defaultPrice/100}
                    </span>
                    <p className="text-xs text-slate-500">{item.card.info.description}</p> 
                </div>
                <div 
                className="w-3/12 h-36 relative"            
                >
                    <div 
                    className="absolute  inset-x-0 bottom-0 h-4 px-8 "
                    >
                    <button 
                    className=" w-full bg-green-200 text-[#4DA672] rounded-lg  hover:shadow-md hover:bg-gray-100 font-extrabold " 
                    onClick={() =>handleAddItem(item)}  
                    >
                        ADD
                    </button>
                    </div>
                    
                    <img
                        className="w-full h-full object-cover rounded-lg hover:shadow-lg"
                        src={CDN_URL + item.card.info.imageId}
                        alt={item.card.info.name}
                    >
                    </img>
                </div>     
            </div>
            
            ))}
        </div>
        
    )

}
export default ItemList;