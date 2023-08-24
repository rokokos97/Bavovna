import {createSlice, createAction} from '@reduxjs/toolkit';
import localStorageService from '../services/localStorage.service';
import authService from '../services/auth.service';

const initialState = localStorageService.getAccessToken() ?
{
  entities: null,
  isLoading: true,
  error: null,
  auth: {userId: localStorageService.getUserId()},
  isLoggedIn: true,
}:
{
  entities: null,
  isLoading: false,
  error: null,
  auth: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userCreated: (state, action ) => {
      state.entities.push(action.payload);
    },
  },
});

const {reducer: userReducer, actions} = userSlice;
const {
  authRequestFailed,
  authRequestSuccess,
} = actions;

const authRequested = createAction('user/authRequested');

export const signUp = (payload) =>
  async (dispatch) => {
    dispatch(authRequested());
    try {
      const data = await authService.register(payload);
      localStorageService.setTokens(data);
      dispatch(authRequestSuccess(data.user));
    } catch (error) {
      dispatch(authRequestFailed(error.message));
    }
  };
