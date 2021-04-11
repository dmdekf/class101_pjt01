import {
    createSlice,
    configureStore,
    createAction,
    createReducer,
} from "@reduxjs/toolkit";

import {
  addToCart
} from './products'

export const cartsSlice = createSlice({
    name: 'cartReducer',
    initialState:{
        cartscore:0,
        cartitems:[
      ],
    },
    reducers:{
      addProducts: ((state, action) => {
        const { id, title, price } = action.payload.payload
        console.log(id, title, price)
        state.cartitems.push({itemid:id, itemtitle:title, itemprice:price,});
        console.log(state.cartitems)
        state.cartscore+=1
      }
    ),
      checkOut: ((state, action) => state.cartitems),
    },
});

export const { addProducts, checkOut,} = cartsSlice.actions

export default cartsSlice.reducer