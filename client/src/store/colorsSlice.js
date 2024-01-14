import {createSlice} from '@reduxjs/toolkit';
import colorsService from '../services/colors.service';
import generateErrorMessage from '../utils/generateErrorMessage';

const colorsSlice = createSlice({
  name: 'colors',
  initialState: {
    entities: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    colorsRequested: (state) => {
      state.isLoading = true;
    },
    colorsReceived: (state, action) => {
      state.isLoading = false;
      state.entities = action.payload;
    },
    colorsRequestFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const uploadColorsList = () => async (dispatch) => {
  dispatch(colorsRequested());
  try {
    const data = await colorsService.get();
    dispatch(colorsReceived(data));
  } catch (error) {
    if (error.code === 'ERR_NETWORK') {
      dispatch(colorsRequestFailed(generateErrorMessage[error.code]));
    } else {
      dispatch(colorsRequestFailed(error));
    }
  }
};

export const getColors = () => (state) => state.colors.entities;
export const getColorsLoadingStatus = () => (state) => state.colors.isLoading;
export const {colorsRequested, colorsReceived, colorsRequestFailed} =
  colorsSlice.actions;

export default colorsSlice.reducer;
