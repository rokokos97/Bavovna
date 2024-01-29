import {createSlice} from '@reduxjs/toolkit';
import ordersService from '../services/orders.service';

const ordersSlice = createSlice({
  name: 'currentOrder',
  initialState: {
    entities: [],
    orderAmount: 0,
    shippingPrice: 2,
    promoCodeSale: null,
    deliveryOption: '1',
    deliveryMethod: '1',
    paymentMethod: '1',
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
    addOrderRequested: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    addOrderReceiveFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    addOrderReceived: (state, action) => {
      state.isLoading = false;
      state.entities = [...state.entities, action.payload];
    },
    setDeliveryOption: (state, action) => {
      state.deliveryOption = action.payload;
    },
    setDeliveryMethod: (state, action) => {
      state.deliveryMethod = action.payload;
    },
    setPaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
    },
    setOrderAmount: (state, action) => {
      state.orderAmount = action.payload;
    },
    setPromoCodeSale: (state, action) => {
      state.promoCodeSale = action.payload;
    },
    setShippingPrice: (state, action) => {
      state.shippingPrice = action.payload;
    },
  },
});

// export const uploadOrdersList = () => async (dispatch) => {
//  dispatch(ordersRequested());
//  try {
//    const data = await ordersService.get();
//    dispatch(ordersReceived(data));
//  } catch (error) {
//    dispatch(ordersRequestFailed(error));
//  }
// };
export const addOrder = (order) => async (dispatch) => {
  dispatch(addOrderRequested());
  try {
    const data = await ordersService.add(order);
    dispatch(addOrderReceived(data));
  } catch (error) {
    dispatch(addOrderReceiveFailed(error));
  }
};
export const changeDeliveryOption = (option) => async (dispatch) => {
  dispatch(changeDeliveryOption(option));
};

export const getOrders = () => (state) => state.orders.entities;
export const getOrdersLoadingStatus = () => (state) => state.orders.isLoading;
export const getDeliveryOption = () => (state)=> state.orders.deliveryOption;
export const getShippingPrice = () => (state) => state.orders.shippingPrice;
export const getPaymentMethod = () => (state) => state.orders.paymentMethod;
export const getPromoCodeSale = () => (state) => state.orders.promoCodeSale;
export const getOrderAmount = () => (state) => state.orders.orderAmount;
export const {
//  ordersRequested,
//  ordersReceived,
//  ordersRequestFailed,
  setPromoCodeSale,
  setPaymentMethod,
  setDeliveryMethod,
  setDeliveryOption,
  setShippingPrice,
  setOrderAmount,
  addOrderRequested,
  addOrderReceived,
  addOrderReceiveFailed,
} = ordersSlice.actions;

export default ordersSlice.reducer;
