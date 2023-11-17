import {configureStore, combineReducers} from '@reduxjs/toolkit';
import itemsReducer from './itemsSlice';
import categoriesReducer from './categorySlice.js';
import userReducer from './userSlice';
import citiesReducer from './citiesSlice';

const rootReducer = combineReducers({
  items: itemsReducer,
  categories: categoriesReducer,
  cities: citiesReducer,
  user: userReducer,
});
export default configureStore({
  reducer: rootReducer,
});
