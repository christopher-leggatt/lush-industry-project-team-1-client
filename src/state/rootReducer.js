import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';
import storeReducer from './storeSlice';

const rootReducer = combineReducers({
  cart: cartReducer,
  store: storeReducer,
});

export default rootReducer;