import {createSlice} from '@reduxjs/toolkit';
import ordersService from '../services/orders.service';

const ordersSlice = createSlice({
  name: 'currentOrder',
  initialState: {
    entities: [],
    orderAmount: 0,
    shippingPrice: 2,
    promoCodeSale: null,
    userInfo: {},
    userDeliveryInfo: {},
    deliveryOption: 'new address',
    deliveryMethod: 'Nova poshta delivery to the post office',
    paymentMethod: 'Pay by card',
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
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    setUserDeliveryInfo: (state, action) => {
      state.userDeliveryInfo = action.payload;
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
    setOrderToInitialState: (state) => {
      state.orderAmount = 0;
      state.shippingPrice = 2;
      state.promoCodeSale = null;
      state.userInfo = {};
      state.userDeliveryInfo = {};
      state.deliveryOption = 'new address';
      state.deliveryMethod = 'Nova poshta delivery to the post office';
      state.paymentMethod = 'Pay by card';
      state.error = null;
    },
  },
});
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
export const getDeliveryMethod = () => (state)=> state.orders.deliveryMethod;
export const getShippingPrice = () => (state) => state.orders.shippingPrice;
export const getDeliveryInfo = () => (state) => state.orders.userDeliveryInfo;
export const getUserInfo = () => (state) => state.orders.userInfo;
export const getPaymentMethod = () => (state) => state.orders.paymentMethod;
export const getPromoCodeSale = () => (state) => state.orders.promoCodeSale;
export const getOrderAmount = () => (state) => state.orders.orderAmount;
export const {
  setOrderToInitialState,
  setUserDeliveryInfo,
  setUserInfo,
  setPromoCodeSale,
  setPaymentMethod,
  setDeliveryMethod,
  setDeliveryOption,
  setOrderAmount,
  addOrderRequested,
  addOrderReceived,
  addOrderReceiveFailed,
} = ordersSlice.actions;

export default ordersSlice.reducer;
