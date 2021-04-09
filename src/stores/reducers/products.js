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
    removeToCart: ((prod) => prod.score +=1),
    addToCart : ((state, prod) => {
        if (state.PRODUCTS.prod.score > 0) {
          return state, prod.score -=1
        }

      }),
    },
    
});

export const { addToCart, userProducts, removeToCart} = productsSlice.actions

export default productsSlice.reducer