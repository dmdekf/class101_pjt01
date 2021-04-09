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
          {
            id:String,
            addscore:0,
            title:String,
            price:Number,
          }
        ]
    },
    reducers:{
      addprod: ((state, action) => {
        switch(action.type) {
          case  addToCart:
            if (state.cartitems.id.filter(action.id)) {
              return action}
      }
    }),
      checkOut: ((state, action) => state.cartitems),
    },
});

export const { addProducts, } = cartsSlice.actions

export default cartsSlice.reducer