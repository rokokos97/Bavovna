import {createAction, createSlice} from '@reduxjs/toolkit';
import localStorageService from '../services/localStorage.service';
import authService from '../services/auth.service';
import userService from '../services/user.service';

const initialState = localStorageService.getAccessToken() ?
{
  entities: null,
  isLoading: true,
  response: null,
  auth: {userId: localStorageService.getUserId()},
  isLoggedIn: true,
}:
{
  entities: null,
  isLoading: false,
  response: null,
  auth: null,
  isLoggedIn: false,
};


const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authRequested: (state) => {
      state.error = null;
    },
    authRequestSuccess: (state, action) => {
      state.entities = action.payload;
      state.auth = action.payload._id;
      state.isLoggedIn = true;
      state.response = null;
    },
    authRequestFailed: (state, action) => {
      state.entities = null;
      state.auth = null;
      state.response = action.payload;
    },
    userCreated: (state, action) => {
      state.response = action.payload;
    },
    userLoggedOut: (state) => {
      state.entities = null;
      state.isLoggedIn = false;
      state.auth = null;
    },
    userUpdateSuccess: (state, action) => {
      state.entities = action.payload.updatedUser;
      state.response = action.payload.response;
    },
    userUpdateFailed: (state, action) => {
      state.response = action.payload;
    },
    userLoadRequestSuccess: (state, action) => {
      state.entities = action.payload;
      state.auth = action.payload._id;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    userResetPasswordRequestSuccess: (state, action) => {
      state.response = action.payload;
    },
    userResetPasswordRequestFailed: (state, action) => {
      state.response = action.payload;
    },
    userSetNewPasswordRequestFailed: (state, action) => {
      state.error = action.payload;
    },
    userResponseCleared: (state) => {
      state.response = null;
    },
    emailVerificationRequestedSuccess: (state, action) => {
      state.entities = action.payload.user;
      state.auth = action.payload._id;
      state.isLoggedIn = true;
      state.response = action.payload.response;
    },
    emailVerificationRequestFailed: (state, action) => {
      state.response = action.payload;
    },
    userAddressAddedFailed: (state, action) => {
      state.response = action.payload;
    },
  },
});
const {reducer: userReducer, actions} = usersSlice;
const {
  userCreated,
  userResponseCleared,
  userResetPasswordRequestSuccess,
  userResetPasswordRequestFailed,
  userSetNewPasswordRequestFailed,
  authRequestFailed,
  authRequestSuccess,
  userLoggedOut,
  userUpdateSuccess,
  userUpdateFailed,
  userLoadRequestSuccess,
  emailVerificationRequestedSuccess,
  emailVerificationRequestFailed,
} = actions;

const userSetNewPasswordRequested = createAction('userSetNewPasswordRequested');
const userResetPasswordRequested = createAction('user/userResetPasswordRequested');
const authRequested = createAction('users/authRequested');
const userLoadRequested = createAction('users/userLoadRequested');
const userLoadRequestFailed = createAction('users/userLoadRequestFailed');
const userUpdateRequested = createAction('users/userUpdateRequested');
const emailVerificationRequested = createAction('user/emailVerificationRequested');
export const clearUserResponse = () => (dispatch) => {
  dispatch(userResponseCleared());
};
export const signUp = (payload) => async (dispatch) => {
  dispatch(authRequested());
  try {
    const data = await authService.register(payload);
    dispatch(userCreated(data.response));
  } catch (error) {
    dispatch(authRequestFailed(error.response.data.response));
  }
};
export const signUpWithGoogle = (payload) => async (dispatch) => {
  dispatch(authRequested());
  try {
    const data = await authService.registerWithGoogle(payload);
    localStorageService.setTokens(data);
    dispatch(authRequestSuccess(data.user));
  } catch (error) {
    dispatch(authRequestFailed(error.response.data.response));
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
    dispatch(authRequestFailed(error.response.data.response));
  }
};
export const logInWithPassword = ({payload}) => async (dispatch) => {
  const {email, password} = payload;
  dispatch(authRequested());
  try {
    const data = await authService.login({email, password});
    localStorageService.setTokens(data);
    dispatch(authRequestSuccess(data.user));
  } catch (error) {
    dispatch(authRequestFailed(error.response.data.response));
  }
};
export const verifyEmail = (token, email) => async (dispatch) => {
  dispatch(emailVerificationRequested());
  try {
    const data = await authService.emailVerifiy(token, email);
    localStorageService.setTokens(data);
    dispatch(emailVerificationRequestedSuccess(data));
  } catch (error) {
    dispatch(emailVerificationRequestFailed(error.response.data.response));
  }
};
export const resetPassword = ({payload}) => async (dispatch) => {
  dispatch(userResetPasswordRequested());
  const {email} = payload;
  try {
    const data = await authService.reset({email});
    dispatch(userResetPasswordRequestSuccess(data.response));
  } catch (error) {
    dispatch(userResetPasswordRequestFailed(error.response.data.response));
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
    const content = await userService.update(payload);
    dispatch(userUpdateSuccess(content));
    dispatch(loadUser());
  } catch (error) {
    dispatch(userUpdateFailed(error.response.data.response));
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
export const getIsLoggedIn = () => (state) => state.user.isLoggedIn;
export const getResponse = () => (state) => state.user.response;


export default userReducer;
