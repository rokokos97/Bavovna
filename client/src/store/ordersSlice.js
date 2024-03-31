import {createAsyncThunk, createSelector, createSlice} from '@reduxjs/toolkit';
import ordersService from '../services/orders.service';
import generateErrorMessage from '../utils/generateErrorMessage';

export const addOrder = createAsyncThunk(
    'order/addOrder',
    async (order, {rejectWithValue} ) => {
      try {
        return await ordersService.add(order);
      } catch (error) {
        if (error.code === 'ERR_NETWORK') {
          return rejectWithValue(generateErrorMessage[error.code]);
        }
        return rejectWithValue(error || 'SERVER_ERROR');
      }
    });

const ordersSlice = createSlice({
  name: 'currentOrder',
  initialState: {
    entities: [],
    orderAmount: 0,
    shippingPrice: null,
    promoCodeSale: null,
    userInfo: {},
    userDeliveryInfo: {},
    deliveryOption: 'new delivery method',
    deliveryMethod: 'Nova poshta delivery to the post office',
    paymentMethod: 'Pay by card',
    isLoading: false,
    error: null,
  },
  reducers: {
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
    setDeliveryPrice: (state, action) => {
      state.shippingPrice = action.payload;
    },
    setOrderAmount: (state, action) => {
      state.orderAmount = action.payload;
    },
    setPromoCodeSale: (state, action) => {
      state.promoCodeSale = action.payload;
    },
    setOrderToInitialState: (state) => {
      state.orderAmount = 0;
      state.shippingPrice = null;
      state.promoCodeSale = null;
      state.userInfo = {};
      state.userDeliveryInfo = {};
      state.deliveryOption = 'new delivery method';
      state.deliveryMethod = 'Nova poshta delivery to the post office';
      state.paymentMethod = 'Pay by card';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
        .addCase(addOrder.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(addOrder.fulfilled, (state, action) => {
          state.isLoading = false;
          state.entities = action.payload;
        })
        .addCase(addOrder.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        });
  },
});
export const changeDeliveryOption = (option) => async (dispatch) => {
  dispatch(changeDeliveryOption(option));
};

const selectOrders = (state) => state.orders.entities;
export const getOrders = createSelector(
    [selectOrders],
    (entities) => entities,
);
const selectOrdersLoadingStatus = (state) => state.orders.isLoading;
export const getOrdersLoadingStatus = createSelector(
    [selectOrdersLoadingStatus],
    (isLoading)=> isLoading,
);
const selectDeliveryOption = (state)=> state.orders.deliveryOption;
export const getDeliveryOption= createSelector(
    [selectDeliveryOption],
    (deliveryOption) => deliveryOption,
);
const selectDeliveryMethod= (state)=> state.orders.deliveryMethod;
export const getDeliveryMethod = createSelector(
    [selectDeliveryMethod],
    (deliveryMethod) => deliveryMethod,
);
const selectShippingPrice= (state) => state.orders.shippingPrice;
export const getShippingPrice = createSelector(
    [selectShippingPrice],
    (shippingPrice)=> shippingPrice,
);
const selectDeliveryInfo=(state) => state.orders.userDeliveryInfo;
export const getDeliveryInfo = createSelector(
    [selectDeliveryInfo],
    (userDeliveryInfo)=> userDeliveryInfo,
);
const selectUserInfo = (state) => state.orders.userInfo;
export const getUserInfo = createSelector(
    [selectUserInfo],
    (userInfo)=> userInfo,
);
const selectPaymentMethod= (state) => state.orders.paymentMethod;
export const getPaymentMethod = createSelector(
    [selectPaymentMethod],
    (paymentMethod)=> paymentMethod,
);
const selectPromoCodeSale=(state) => state.orders.promoCodeSale;
export const getPromoCodeSale = createSelector(
    [selectPromoCodeSale],
    (promoCodeSale)=> promoCodeSale,
);
const selectOrderAmount = (state) => state.orders.orderAmount;
export const getOrderAmount = createSelector(
    [selectOrderAmount],
    (orderAmount)=> orderAmount,
);
export const {
  setOrderToInitialState,
  setUserDeliveryInfo,
  setUserInfo,
  setPromoCodeSale,
  setPaymentMethod,
  setDeliveryMethod,
  setDeliveryOption,
  setOrderAmount,
  setDeliveryPrice,
} = ordersSlice.actions;

export default ordersSlice.reducer;
