import {createSlice} from '@reduxjs/toolkit';
import npService from '../services/np.service';
import generateErrorMessage from '../utils/generateErrorMessage';

const citiesSlice = createSlice({
  name: 'cities',
  initialState: {
    entities: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    citiesRequested: (state) => {
      state.isLoading = true;
    },
    citiesReceived: (state, action) => {
      state.isLoading = false;
      state.entities = action.payload;
    },
    citiesRequestFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export const {
  citiesRequested,
  citiesReceived,
  citiesRequestFailed,
} = citiesSlice.actions;

export const uploadCitiesList = () => async (dispatch) => {
  dispatch(citiesRequested());
  try {
    const data = await npService.get();
    dispatch(citiesReceived(data));
  } catch (error) {
    if (error.code === 'ERR_NETWORK') {
      dispatch(citiesRequestFailed(generateErrorMessage[error.code]));
    } else {
      dispatch(citiesRequestFailed(error));
    }
  }
};
export const getCitiesList = () => (state) => state.cities.entities;

export default citiesSlice.reducer;
