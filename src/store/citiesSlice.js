import {createSlice} from '@reduxjs/toolkit';
import npService from '../services/np.service';

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
    categoriesRequestFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
// const {reducer: citiesReducer, actions} = citiesSlice;
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
    dispatch(citiesRequestFailed(error));
  }
};

export const getCitiesList = () => (state) => state.cities.entities;

export default citiesSlice.reducer;
