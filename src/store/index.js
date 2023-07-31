import {configureStore, combineReducers} from '@reduxjs/toolkit';
import itemsReducer from './itemsSlice';
import categoriesReducer from './categorySlice.js';

const rootReducer = combineReducers({
  items: itemsReducer,
  categories: categoriesReducer,
});
export default configureStore({
  reducer: rootReducer,
});
