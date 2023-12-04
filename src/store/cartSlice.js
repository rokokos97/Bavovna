import {createSlice} from '@reduxjs/toolkit';
import sessionStorageService from '../services/sessionStorage.service';

// const transferDataToSessionStorage = () => {
//  const keys = Object.keys(localStorage);
//  keys.forEach((key) => {
//    const value = localStorage.getItem(key);
//    sessionStorage.setItem(key, value);
//  });
// };
// if (localStorageService.getAccessToken()) {
//  transferDataToSessionStorage();
// }
const storedCart = sessionStorageService.getCurrentCart('cart');

const initialState = storedCart ? {
  entities: storedCart,
}:{
  entities: [],
};
const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addedItem(state, action) {
      state.entities.push(action.payload);
    },
    removeItem(state, action) {
      state.entities = state.entities.filter((el) => el.itemIdentifier !== action.payload);
    },
    removeOneItem(state, action) {
      const index = state.entities.findIndex((el) => el.itemIdentifier === action.payload);
      if (index !== -1) {
        state.entities.splice(index, 1);
      }
    },
    deletedItems(state) {
      state.entities = [];
    },
  },
});

const {reducer: cartReducer, actions} = cartSlice;
const {addedItem, deletedItems, removeItem, removeOneItem} = actions;

export const addItemToCart = (item) => (dispatch) => {
  dispatch(addedItem(item));
};

export const removeOneItemFromCart = (itemId) => (dispatch) => {
  dispatch(removeOneItem(itemId));
};
export const removeItemFromCart = (itemId) => (dispatch) => {
  dispatch(removeItem(itemId));
};


export const deleteItemsFromCart = () => (dispatch) => {
  dispatch(deletedItems());
};

export const getCart = () => (state) => state.cart.entities;

export default cartReducer;
