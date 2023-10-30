import {createAction, createSlice} from '@reduxjs/toolkit';
import localStorageService from '../services/localStorage.service';
import authService from '../services/auth.service';
import userService from '../services/user.service';
import transformErrorMessage from '../utils/generateAuthError';

const initialState = localStorageService.getAccessToken() ?
{
  entities: null,
  isLoading: true,
  error: null,
  success: null,
  auth: {userId: localStorageService.getUserId()},
  isLoggedIn: true,
}:
{
  entities: null,
  isLoading: false,
  error: null,
  success: null,
  auth: null,
  isLoggedIn: false,
};


const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authRequestSuccess: (state, action) => {
      state.entities = action.payload;
      state.auth = action.payload._id;
      state.isLoggedIn = true;
      state.error = null;
    },
    authRequestFailed: (state, action) => {
      state.entities = null;
      state.auth = null;
      state.error = action.payload;
    },
    userCreated: (state, action) => {
      state.entities.push(action.payload);
    },
    userLoggedOut: (state) => {
      state.entities = null;
      state.isLoggedIn = false;
      state.auth = null;
    },
    userUpdateSuccess: (state, action) => {
      state.entities = action.payload;
    },
    authRequested: (state) => {
      state.error = null;
    },
    userLoadRequestSuccess: (state, action) => {
      state.entities = action.payload;
      state.auth = action.payload._id;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    userResetPasswordRequestSuccess: (state, action) => {
      state.success = action.payload;
    },
    userResetPasswordRequestFailed: (state, action) => {
      state.error = action.payload;
    },
    userSetNewPasswordRequestFailed: (state, action) => {
      state.error = action.payload;
    },
    userMessageCleared: (state) => {
      state.error = null;
      state.success = null;
    },
  },
});
const {reducer: userReducer, actions} = usersSlice;
const {
  userMessageCleared,
  userResetPasswordRequestSuccess,
  userSetNewPasswordRequestFailed,
  authRequestFailed,
  authRequestSuccess,
  userLoggedOut,
  userUpdateSuccess,
  userLoadRequestSuccess,
} = actions;

const userSetNewPasswordRequested = createAction('userSetNewPasswordRequested');
const userResetPasswordRequested = createAction('user/userResetPasswordRequested');
const authRequested = createAction('users/authRequested');
const userLoadRequested = createAction('users/userLoadRequested');
const userLoadRequestFailed = createAction('users/userLoadRequestFailed');
const userUpdateFailed = createAction('users/userUpdateFailed');
const userUpdateRequested = createAction('users/userUpdateRequested');

function errorHandler(error, dispatch) {
  const {code, message} = error.response.data.response;
  if (code === 400 || code === 500) {
    const errorMessage = transformErrorMessage[message];
    dispatch(authRequestFailed(errorMessage));
  }
}
export const clearUserMessages = () => (dispatch) => {
  dispatch(userMessageCleared());
};
export const signUp = (payload) => async (dispatch) => {
  dispatch(authRequested());
  try {
    const data = await authService.register(payload);
    localStorageService.setTokens(data);
    dispatch(authRequestSuccess(data.user));
  } catch (error) {
    errorHandler(error, dispatch);
  }
};
export const signUpWithGoogle = (payload) => async (dispatch) => {
  dispatch(authRequested());
  try {
    const data = await authService.registerWithGoogle(payload);
    localStorageService.setTokens(data);
    dispatch(authRequestSuccess(data.user));
  } catch (error) {
    errorHandler(error, dispatch);
  }
};
export const loginWithGoogle = (payload) =>async (dispatch) =>{
  const {email} = payload;
  dispatch(authRequested());
  try {
    const data = await authService.loginWithGoogle({email});
    localStorageService.setTokens(data);
    dispatch(authRequestSuccess(data.user));
  } catch (error) {
    errorHandler(error, dispatch);
  }
};
export const logIn = ({payload}) => async (dispatch) => {
  const {email, password} = payload;
  dispatch(authRequested());
  try {
    const data = await authService.login({email, password});
    localStorageService.setTokens(data);
    dispatch(authRequestSuccess(data.user));
  } catch (error) {
    errorHandler(error, dispatch);
  }
};
export const reset = ({payload}) => async (dispatch) => {
  const {email} = payload;
  dispatch(userResetPasswordRequested());
  try {
    const data = await authService.reset({email});
    dispatch(userResetPasswordRequestSuccess(data.message));
  } catch (error) {
    errorHandler(error, dispatch);
  }
};
export const setNewPassword = (token, email, values) => async (dispatch) => {
  dispatch(userSetNewPasswordRequested());
  try {
    return await authService.setNewPassword(token, email, values);
  } catch (error) {
    dispatch(userSetNewPasswordRequestFailed());
  }
};
export const logOut = () => (dispatch) => {
  localStorageService.removeAuthData();
  dispatch(userLoggedOut());
};
export const updateUser = (payload) => async (dispatch) => {
  dispatch(userUpdateRequested());
  try {
    const {content} = await userService.update(payload);
    dispatch(userUpdateSuccess(content));
    dispatch(loadUser());
  } catch (error) {
    dispatch(userUpdateFailed(error.message));
  }
};
export const loadUser = () => async (dispatch) => {
  dispatch(userLoadRequested());
  try {
    const content = await userService.getCurrentUser();
    dispatch(userLoadRequestSuccess({...content}));
  } catch (error) {
    dispatch(userLoadRequestFailed(error.message));
  }
};
export const getUser = () => (state) => state.user.entities;
// export const getIsLoadingUser = () => (state) => state.user.isLoading;
export const getIsLoggedIn = () => (state) => state.user.isLoggedIn;
export const getAuthErrors = () => (state) => state.user.error;
export const getSuccessMessage = () => (state) => state.user.success;

export default userReducer;
