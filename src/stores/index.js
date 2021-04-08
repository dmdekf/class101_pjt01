import { configureStore,  } from '@reduxjs/toolkit';

import ProductReducer from './reducers/products'
import CartReducer from './reducers/carts'
export default configureStore({
    reducer: {
        products:ProductReducer,
        carts: CartReducer,
    },
  })