import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state, action) =>{

            /*
            Vannila(older) Redux = DON'T MUTATE STATE, returning was mandatory.
            const newState = [...state];
            newState.items.push(action.payload);
            return newState;
            */

            //Redux ToolKit
            // we HAVE to mutating the state over here.     
            state.items.push(action.payload);
        },
        removeItem:(state) =>{
            state.items.pop();
        },
        //originalState = {items:["Pizza"]}
        clearCart:(state) =>{
            //RTK - either Mutate the existing state or return a new state

            //state.items.length = 0;//state =[]                  
            return {items: []}; // this new object will be replaced inside originalState= {items: []}.              
        },
    },
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;
