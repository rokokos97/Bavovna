import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import sessionStorageService from '../services/sessionStorage.service';
import authService from '../services/auth.service';
import userService from '../services/user.service';
import localStorageService from '../services/localStorage.service';
import {createSelector} from '@reduxjs/toolkit';
import transferDataToSessionStorage from '../utils/transformDataToSessionStorage';

if (localStorageService.getAccessToken()) {
  transferDataToSessionStorage();
}

export const signUpUser = createAsyncThunk(
    'user/signUp',
    async (userData, {rejectWithValue})=> {
      try {
        const {response} = await authService.register(userData);
        return response;
      } catch (error) {
        return rejectWithValue(error.response.data.response|| 'SERVER_ERROR');
      }
    },
);
export const signInUser = createAsyncThunk(
    'user/signIn',
    async (userData, {rejectWithValue})=>{
      const {email, password, rememberMe} = userData;
      try {
        const response = await authService.login({email, password});
        if (rememberMe) {
          localStorageService.setTokens(response);
        } else {
          sessionStorageService.setTokens(response);
        }
        return response;
      } catch (error) {
        return rejectWithValue(error.response.data.response|| 'SERVER_ERROR');
      }
    },
);
export const signUpWithGoogle = createAsyncThunk(
    'user/signUpWithGoogle',
    async (userData, {rejectWithValue}) => {
      try {
        const data = await authService.registerWithGoogle(userData);
        sessionStorageService.setTokens(data);
        return data.user;
      } catch (error) {
        return rejectWithValue(error.response.data.response|| 'SERVER_ERROR');
      }
    },
);
export const signInWithGoogle = createAsyncThunk(
    'user/signInWithGoogle',
    async (userData, {rejectWithValue}) => {
      const {email} = userData;
      try {
        const data = await authService.loginWithGoogle({email});
        sessionStorageService.setTokens(data);
        return (data.user);
      } catch (error) {
        return rejectWithValue(error.response.data.response|| 'SERVER_ERROR');
      }
    },
);
export const updateUserData = createAsyncThunk(
    'user/updateUserData',
    async (userData, {rejectWithValue}) => {
      try {
        return await userService.update(userData);
      } catch (error) {
        return rejectWithValue(error.response.data.response|| 'SERVER_ERROR');
      }
    },
);

export const verifyUserEmail = createAsyncThunk(
    'user/verifyUserEmail',
    async ({token, email}, {rejectWithValue}) => {
      try {
        const data = await authService.emailVerify(token, email);
        sessionStorageService.setTokens(data);
        return data;
      } catch (error) {
        return rejectWithValue(error.response.data.response || 'SERVER_ERROR');
      }
    },
);
export const recoveryUserPassword = createAsyncThunk(
    'user/recoveryUserPassword',
    async ({payload}, {rejectWithValue}) => {
      console.log('email', payload);
      try {
        const {response} = await authService.reset(payload);
        return response;
      } catch (error) {
        return rejectWithValue(error.response.data.response|| 'SERVER_ERROR');
      }
    },
);
export const setNewUserPassword = createAsyncThunk(
    'user/setNewUserPassword',
    async ({token, email, values}, {rejectWithValue}) => {
      try {
        const {response} = await authService.setNewPassword(token, email, values.password);
        return response;
      } catch (error) {
        return rejectWithValue(error.response.data.response || 'SERVER_ERROR');
      }
    },
);

export const fetchUserData = createAsyncThunk(
    'user/fetchUser',
    async (_, {rejectWithValue}) => {
      try {
        const content = await userService.getCurrentUser();
        return {...content};
      } catch (error) {
        return rejectWithValue(error.message);
      }
    },
);

const initialState = sessionStorageService.getAccessToken() ?
{
  user: null,
  isLoading: false,
  error: null,
  response: null,
  isLoggedIn: true,
  auth: {userId: sessionStorageService.getUserId()},
}:
{
  user: null,
  isLoading: false,
  error: null,
  response: null,
  isLoggedIn: false,
  auth: null,
};

const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLoggedOut: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      state.auth = null;
    },
    clearedResponse: (state) => {
      state.error = null;
      state.response = null;
    },
  },
  extraReducers: (builder)=> {
    builder
        .addCase(signUpUser.pending, (state)=> {
          state.isLoading = true;
          state.error = null;
          state.response = null;
        })
        .addCase(signUpUser.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error = null;
          state.response = action.payload;
        })
        .addCase(signUpUser.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
          state.response = null;
        })
        .addCase(signInUser.pending, (state)=> {
          state.isLoading = true;
          state.error = null;
          state.response = null;
        })
        .addCase(signInUser.fulfilled, (state, action)=>{
          state.isLoading = false;
          state.user = action.payload.user;
          state.auth = action.payload.userId;
          state.isLoggedIn = true;
          state.error = null;
          state.response = null;
        })
        .addCase(signInUser.rejected, (state, action)=> {
          state.isLoading = false;
          state.error = action.payload;
          state.response = null;
        })
        .addCase(signUpWithGoogle.pending, (state)=>{
          state.isLoading = true;
          state.error = null;
          state.response = null;
        })
        .addCase(signUpWithGoogle.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isLoggedIn = true;
          state.user = action.payload.user;
          state.auth = action.payload.userId;
          state.error = null;
          state.response = null;
        })
        .addCase(signUpWithGoogle.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
          state.response = null;
        })
        .addCase(signInWithGoogle.pending, (state)=>{
          state.isLoading = true;
          state.error = null;
          state.response = null;
        })
        .addCase(signInWithGoogle.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isLoggedIn = true;
          state.user = action.payload.user;
          state.auth = action.payload.userId;
          state.error = null;
          state.response = null;
        })
        .addCase(signInWithGoogle.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
          state.response = null;
        })
        .addCase(updateUserData.pending, (state)=>{
          state.isLoading = true;
          state.error = null;
          state.response = null;
        })
        .addCase(updateUserData.fulfilled, (state, action) => {
          state.isLoading = false;
          state.user = action.payload.updatedUser;
          state.error = null;
          state.response = action.payload.response;
        })
        .addCase(updateUserData.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
          state.response = null;
        })
        .addCase(verifyUserEmail.pending, (state)=>{
          state.isLoading =true;
          state.error = null;
          state.response = null;
        })
        .addCase(verifyUserEmail.fulfilled, (state, action) => {
          state.isLoading = false;
          state.user = action.payload.user;
          state.auth = action.payload._id;
          state.response = action.payload.response;
          state.error = null;
          state.isLoggedIn = true;
        })
        .addCase(verifyUserEmail.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
          state.response = null;
        })
        .addCase(recoveryUserPassword.pending, (state)=>{
          state.isLoading =true;
          state.error = null;
          state.response = null;
        })
        .addCase(recoveryUserPassword.fulfilled, (state, action) => {
          console.log(action.payload);
          state.isLoading = false;
          state.error = null;
          state.response = action.payload;
        })
        .addCase(recoveryUserPassword.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
          state.response = null;
        })
        .addCase(setNewUserPassword.pending, (state)=>{
          state.isLoading =true;
          state.error = null;
          state.response = null;
        })
        .addCase(setNewUserPassword.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error = null;
          state.response = action.payload;
        })
        .addCase(setNewUserPassword.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
          state.response = action.payload;
        })
        .addCase(fetchUserData.pending, (state)=>{
          state.isLoading =true;
          state.error = null;
          state.response = null;
        })
        .addCase(fetchUserData.fulfilled, (state, action) => {
          state.isLoading = false;
          state.user = action.payload;
          state.auth = action.payload._id;
          state.isLoggedIn = true;
          state.error = null;
          state.response = null;
        })
        .addCase(fetchUserData.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
          state.response = null;
        });
  },
});
const {reducer: userReducer, actions} = usersSlice;
const {
  userLoggedOut,
  clearedResponse,
} = actions;

export const userLogOut = () => (dispatch) => {
  sessionStorageService.removeAuthData();
  localStorageService.removeAuthData();
  dispatch(userLoggedOut());
};
export const userClearResponse = () => (dispatch) => {
  dispatch(clearedResponse());
};

const selectUserLoadingStatus = (state) => state.user.isLoading;
export const getUserLoadingStatus = createSelector(
    [selectUserLoadingStatus],
    (isLoading) => isLoading,
);
const selectUserData = (state) => state.user.user;
export const getUser = createSelector(
    [selectUserData],
    (user) => user,
);
const selectIsLoggedIn = (state) => state.user.isLoggedIn;
export const getIsLoggedIn = createSelector(
    [selectIsLoggedIn],
    (isLoggedIn) => isLoggedIn,
);
const selectResponse = (state) => state.user.response;
export const getResponse = createSelector(
    [selectResponse],
    (response)=> response,
);

const selectError = (state) => state.user.error;
export const getError = createSelector(
    [selectError],
    (response)=> response,
);

export default userReducer;
