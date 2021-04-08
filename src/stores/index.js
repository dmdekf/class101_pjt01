import { combineReducers,configureStore,
    createAction,
    createReducer,  } from '@reduxjs/toolkit';

import ProductReducer from './reducers/products'

export default configureStore({
    reducer: {
        products:ProductReducer,
    },
  })