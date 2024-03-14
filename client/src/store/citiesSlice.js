import {createAsyncThunk, createSelector, createSlice} from '@reduxjs/toolkit';
import npService from '../services/np.service';
import generateErrorMessage from '../utils/generateErrorMessage';

export const fetchCitiesList = createAsyncThunk(
    'cities/fetchStatus',
    async (_, {rejectWithValue}) => {
      try {
        return await npService.get();
      } catch (error) {
        if (error.code === 'ERR_NETWORK') {
          return rejectWithValue(generateErrorMessage[error.code]);
        }
        return rejectWithValue(error || 'SERVER_ERROR');
      }
    });
const citiesSlice = createSlice({
  name: 'cities',
  initialState: {
    entities: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
        .addCase(fetchCitiesList.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        .addCase(fetchCitiesList.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error = null;
          state.entities = action.payload;
        })
        .addCase(fetchCitiesList.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        });
  }});
const selectCitiesList =(state) => state.cities.entities;
export const getCitiesList = createSelector(
    [selectCitiesList],
    (entities)=> entities,
);
const selectCitiesError =(state) => state.cities.error;
export const getCitiesError = createSelector(
    [selectCitiesError],
    (error) => error,
);
const selectIsLoadingStatus = (state) => state.cities.isLoading;
export const getCitiesIsLoadingStatus = createSelector(
    [selectIsLoadingStatus],
    (isLoading) => isLoading,
);
export default citiesSlice.reducer;
