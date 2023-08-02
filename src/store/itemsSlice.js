import {createSlice} from '@reduxjs/toolkit';
import itemService from '../services/http.service';

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
  },
});

export const uploadItemList = () => async (dispatch) => {
  dispatch(itemsRequested());
  try {
    const {data} = await itemService.get();
    console.log(data);
    dispatch(itemsReceived(data));
  } catch (error) {
    dispatch(itemsRequestFailed(error));
  }
};

export const {
  itemsRequested,
  itemsReceived,
  itemsRequestFailed,
} = itemsSlice.actions;

export default itemsSlice.reducer;
