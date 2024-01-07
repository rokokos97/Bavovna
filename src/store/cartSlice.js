import {createSlice} from '@reduxjs/toolkit';
import sessionStorageService from '../services/sessionStorage.service';
import _ from 'lodash';
import {createSelector} from '@reduxjs/toolkit';
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
    removeAllItemsFromCart(state) {
      state.entities = [];
    },
  },
});

const {reducer: cartReducer, actions} = cartSlice;
const {addedItem, removeItem, removeOneItem, removeAllItemsFromCart} = actions;
const selectCartEntities = (state) => state.cart.entities;
export const clearCart = () => (dispatch) => {
  dispatch(removeAllItemsFromCart());
};
export const addItemToCart = (item) => (dispatch) => {
  dispatch(addedItem(item));
};
export const removeOneItemFromCart = (itemId) => (dispatch) => {
  dispatch(removeOneItem(itemId));
};
export const removeItemFromCart = (itemId) => (dispatch) => {
  dispatch(removeItem(itemId));
};
export const getCart = createSelector(
    [selectCartEntities],
    (entries) => entries,
);
export const getCartTotalPrice = createSelector(
    [selectCartEntities],
    (entities) => entities.reduce((acc, el) => acc + el.discountPrice, 0),
);
export const getNormalizedCart = createSelector(
    [selectCartEntities],
    (entities) => {
      const newNormalizedCart = [];

      for (const good of entities) {
        const foundIndex = newNormalizedCart.findIndex((item) => item.itemIdentifier === good.itemIdentifier);

        if (foundIndex !== -1) {
          newNormalizedCart[foundIndex] = {
            ...newNormalizedCart[foundIndex],
            itemQuantity: newNormalizedCart[foundIndex].itemQuantity + 1,
          };
        } else {
          newNormalizedCart.push({...good, itemQuantity: 1});
        }
      }

      return _.sortBy(newNormalizedCart, 'itemName');
    },
);
export const getCartLength = createSelector(
    [selectCartEntities],
    (entities) => entities.length,
);
export default cartReducer;
