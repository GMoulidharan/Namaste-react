import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItem, updateIndex}) =>{
    // console.log(showItem);

    const handleShowItems =() =>{
        updateIndex();// Calls the `updateActiveIndex` method from RestaurantMenu(setShowIndex)
    }
    return (
        <div>
            {/* Accordion Header */}
            <div 
            className="w-11/12 bg-gray-100 shadow-lg p-4 mx-auto my-3 text-center  border-b-8 hover:border-blue-600"
            >
                <div 
                    className="flex justify-between cursor-pointer" 
                    onClick={handleShowItems} //trigger event that calls handleShowItems
                >
                    <span className="font-bold text-lg">
                        {data.title} ({data.itemCards.length})</span>
                    <span>{showItem ? "⬆️" : "⬇️" }</span>
                </div>
                
                {/* Accordion body */}
                {showItem && <ItemList items ={data.itemCards}/>}
                {/* //controlling the item list with show items  */}
            </div>

            
        </div>
    )
}

export default RestaurantCategory;