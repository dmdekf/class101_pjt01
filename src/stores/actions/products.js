import {
    combineReducers,
    configureStore,
    createAction,
    createReducer,
  } from "@reduxjs/toolkit";

export const ADD_CART = createAction("ADD_CART");
export const DELETE_TO_CART = createAction("DELETE_CART");