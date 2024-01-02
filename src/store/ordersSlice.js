import {createSlice} from '@reduxjs/toolkit';
import ordersService from '../services/orders.service';

const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    entities: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    ordersRequested: (state) => {
      state.isLoading = true;
    },
    ordersReceived: (state, action) => {
      state.isLoading = false;
      state.entities = action.payload;
    },
    ordersRequestFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const uploadOrdersList = () => async (dispatch) => {
  dispatch(ordersRequested());
  try {
    const data = await ordersService.get();
    dispatch(ordersReceived(data));
  } catch (error) {
    dispatch(ordersRequestFailed(error));
  }
};

export const getOrders = () => (state) => state.categories.entities;
export const getOrdersLoadingStatus = () => (state) => state.categories.isLoading;
export const {
  ordersRequested,
  ordersReceived,
  ordersRequestFailed,
} = ordersSlice.actions;

export default ordersSlice.reducer;
