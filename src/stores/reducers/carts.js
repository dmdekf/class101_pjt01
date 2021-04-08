import {
    createSlice,
    configureStore,
    createAction,
    createReducer,
} from "@reduxjs/toolkit";

export const cartsSlice = createSlice({
    name: 'cartReducer',
    initialState:{
        cartscore:0,
        cartitems:[]
    },
    reducers:{
    addProducts: (state, { payload }) => {
        const item = state.cartitems.find((payload)=> state.cartitems.id === payload.id);
  
        if (item) {
          item.score += 1;
          item.id.socre +=1
        } else {
          state.cartitems.push(payload)
          item.score += 1;
        }
    },
    },
});

export const { addProducts, } = cartsSlice.actions

export default cartsSlice.reducer