import PRODUCTS from "../../data/productItems";
import {
    createSlice,
    configureStore,
    createAction,
    createReducer,
} from "@reduxjs/toolkit";



export const productsSlice = createSlice({
    name: 'productReducer',
    initialState: PRODUCTS,CARTS,
    reducers:{
    userProducts: PRODUCTS.filter((prod) => prod.id === "id" ),
    removeToCart: ((prod) => prod),
    },
});

export const { addToCart, userProducts, removeToCart} = productsSlice.actions

export default productsSlice.reducer