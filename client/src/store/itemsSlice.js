import {createSlice} from '@reduxjs/toolkit';
import itemService from '../services/item.service';
import generateErrorMessage from '../utils/generateErrorMessage';

const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    entities: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    itemsRequested: (state) => {
      state.isLoading = true;
    },
    itemsReceived: (state, action) => {
      state.isLoading = false;
      state.entities = action.payload;
    },
    itemsRequestFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    itemCreatRequested: (state) => {
      state.isLoading = true;
    },
    itemCreateReceived: (state, action) => {
      state.isLoading = false;
      state.entities.push(action.payload);
    },
    itemCreateFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    itemDeleteRequested: (state) => {
      state.isLoading = true;
    },
    itemDeleteReceived: (state, action) => {
      state.isLoading = false;
      state.entities = state
          .entities.filter((item)=> item._id !== action.payload);
    },
    itemDeleteFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export const uploadItemList = () => async (dispatch) => {
  dispatch(itemsRequested());
  try {
    const data = await itemService.get();
    dispatch(itemsReceived(data));
  } catch (error) {
    if (error.code === 'ERR_NETWORK') {
      dispatch(itemsRequestFailed(generateErrorMessage[error.code]));
    } else {
      dispatch(itemsRequestFailed(error));
    }
  }
};
export const getItems = () => (state) => state.items.entities;
export const getItemsById = (id) => (state) => state.items.entities.find((item)=> item._id === id);
export const getItemsLoadingStatus = () => (state) => state.items.isLoading;
export const getItemsError = () => (state) => state.items.error;
export const {
  itemsRequested,
  itemsReceived,
  itemsRequestFailed,
} = itemsSlice.actions;
export default itemsSlice.reducer;
