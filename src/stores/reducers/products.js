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
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter((prod) => prod.id === "id" ),
});

export default productsSlice.reducer