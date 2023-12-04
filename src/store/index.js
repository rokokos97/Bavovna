import {configureStore, combineReducers} from '@reduxjs/toolkit';
import itemsReducer from './itemsSlice';
import categoriesReducer from './categorySlice.js';
import userReducer from './userSlice';
import citiesReducer from './citiesSlice';
import cartReducer from './cartSlice.js';
import colorsReducer from './colorsSlice.js';

const rootReducer = combineReducers({
  items: itemsReducer,
  categories: categoriesReducer,
  cities: citiesReducer,
  user: userReducer,
  cart: cartReducer,
  colors: colorsReducer,
});
export default configureStore({
  reducer: rootReducer,
});
