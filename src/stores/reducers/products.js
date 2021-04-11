import PRODUCTS from "../../data/productItems";
import {
    createSlice,
    configureStore,
    createAction,
    createReducer,
} from "@reduxjs/toolkit";



export const productsSlice = createSlice({
    name: 'productReducer',
    initialState: PRODUCTS,
    reducers:{
    removeToCart: ((state, action) => {return state, action.score +=1 }),
    addToCart : ((state, action) => {
        if (action.score > 0) {
          return state, action.score -=1
        }

      }),
    },
    
});

export const { addToCart, removeToCart} = productsSlice.actions

export default productsSlice.reducer