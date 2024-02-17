import {createAction, createSlice} from '@reduxjs/toolkit';
import sessionStorageService from '../services/sessionStorage.service';
import authService from '../services/auth.service';
import userService from '../services/user.service';
import localStorageService from '../services/localStorage.service';
import {createSelector} from '@reduxjs/toolkit';

const transferDataToSessionStorage = () => {
  const keys = Object.keys(localStorage);
  keys.forEach((key) => {
    const value = localStorage.getItem(key);
    if (value !== null) {
      sessionStorage.setItem(key, value);
    }
  });
};
if (localStorageService.getAccessToken()) {
  transferDataToSessionStorage();
}
const initialState = sessionStorageService.getAccessToken() ?
{
  entities: null,
  isLoading: false,
  response: null,
  auth: {userId: sessionStorageService.getUserId()},
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
      state.isLoading = true;
      state.error = null;
    },
    authRequestSuccess: (state, action) => {
      state.entities = action.payload;
      state.auth = action.payload._id;
      state.isLoading = false;
      state.isLoggedIn = true;
      state.response = null;
    },
    authRequestFailed: (state, action) => {
      state.entities = null;
      state.auth = null;
      state.isLoading = false;
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
    userResetPasswordRequested: (state) => {
      state.isLoading = true;
    },
    userResetPasswordRequestSuccess: (state, action) => {
      state.response = action.payload;
      state.isLoading = false;
    },
    userResetPasswordRequestFailed: (state, action) => {
      state.response = action.payload;
      state.isLoading = false;
    },
    userSetNewPasswordRequestSuccess: (state, action) => {
      state.response = action.payload;
      state.isLoading = false;
    },
    userSetNewPasswordRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
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
    userSetNewPasswordRequested: (state) => {
      state.isLoading =true;
    },
  },
});
const {reducer: userReducer, actions} = usersSlice;
const {
  userCreated,
  userResponseCleared,
  userResetPasswordRequested,
  userResetPasswordRequestSuccess,
  userResetPasswordRequestFailed,
  userSetNewPasswordRequestSuccess,
  userSetNewPasswordRequestFailed,
  authRequested,
  authRequestFailed,
  authRequestSuccess,
  userLoggedOut,
  userUpdateSuccess,
  userUpdateFailed,
  userLoadRequestSuccess,
  emailVerificationRequestedSuccess,
  emailVerificationRequestFailed,
  userSetNewPasswordRequested,
} = actions;

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
    setTimeout(()=>{
      dispatch(userCreated(data.response));
    }, 3000);
  } catch (error) {
    setTimeout(()=>{
      dispatch(authRequestFailed(error.response.data.response));
    }, 3000);
  }
};
export const signUpWithGoogle = (payload) => async (dispatch) => {
  dispatch(authRequested());
  try {
    const data = await authService.registerWithGoogle(payload);
    setTimeout(()=>{
      sessionStorageService.setTokens(data);
      dispatch(authRequestSuccess(data.user));
    }, 2000);
  } catch (error) {
    setTimeout(()=>{
      dispatch(authRequestFailed(error.response.data.response));
    }, 2000);
  }
};
export const loginWithGoogle = (payload) =>async (dispatch) =>{
  const {email} = payload;
  dispatch(authRequested());
  try {
    const data = await authService.loginWithGoogle({email});
    sessionStorageService.setTokens(data);
    dispatch(authRequestSuccess(data.user));
  } catch (error) {
    dispatch(authRequestFailed(error.response.data.response));
  }
};
export const logInWithPassword = ({payload}) => async (dispatch) => {
  const {email, password, rememberMe} = payload;
  dispatch(authRequested());
  try {
    const data = await authService.login({email, password});
    setTimeout(()=>{
      if (rememberMe) {
        localStorageService.setTokens(data);
      } else {
        sessionStorageService.setTokens(data);
      }
      dispatch(authRequestSuccess(data.user));
    }, 3000);
  } catch (error) {
    setTimeout(()=>{
      dispatch(authRequestFailed(error.response.data.response));
    }, 3000);
  }
};
export const verifyEmail = (token, email) => async (dispatch) => {
  dispatch(emailVerificationRequested());
  try {
    const data = await authService.emailVerifiy(token, email);
    sessionStorageService.setTokens(data);
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
    console.log(data);
    dispatch(userResetPasswordRequestSuccess(data.response));
  } catch (error) {
    dispatch(userResetPasswordRequestFailed(error.response.data.response));
  }
};
export const setNewPassword = (token, email, values) => async (dispatch) => {
  dispatch(userSetNewPasswordRequested());
  try {
    const data = await authService.setNewPassword(token, email, values);
    dispatch(userSetNewPasswordRequestSuccess(data.response));
  } catch (error) {
    dispatch(userSetNewPasswordRequestFailed(error));
  }
};
export const logOut = () => (dispatch) => {
  sessionStorageService.removeAuthData();
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
const selectUserLoadingStatus = (state) => state.user.isLoading;
export const getUserLoadingStatus = createSelector(
    [selectUserLoadingStatus],
    (isLoading) => isLoading,
);
const selectUserEntities = (state) => state.user.entities;
export const getUser = createSelector(
    [selectUserEntities],
    (entities) => entities,
);
const selectIsLoggedIn = (state) => state.user.isLoggedIn;
export const getIsLoggedIn = createSelector(
    [selectIsLoggedIn],
    (isLoggedIn) => isLoggedIn,
);
export const getResponse = () => (state) => state.user.response;


export default userReducer;
