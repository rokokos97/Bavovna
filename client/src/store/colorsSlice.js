import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';
import colorsService from '../services/colors.service';
import generateErrorMessage from '../utils/generateErrorMessage';

export const fetchColorsList = createAsyncThunk(
  'colors/fetchStatus',
  async (_, { rejectWithValue }) => {
    try {
      return await colorsService.get();
    } catch (error) {
      if (error.code === 'ERR_NETWORK') {
        return rejectWithValue(generateErrorMessage[error.code]);
      }
      return rejectWithValue(error || 'SERVER_ERROR');
    }
  }
);

const colorsSlice = createSlice({
  name: 'colors',
  initialState: {
    entities: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchColorsList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchColorsList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.entities = action.payload;
      })
      .addCase(fetchColorsList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

const selectColors = (state) => state.colors.entities;
export const getColors = createSelector([selectColors], (entities) => entities);
const selectIsColorsLoading = (state) => state.colors.isLoading;
export const getColorsLoadingStatus = createSelector(
  [selectIsColorsLoading],
  (isLoading) => isLoading
);
const selectColorsError = (state) => state.colors.error;
export const getColorsError = createSelector([selectColorsError], (error) => error);

export default colorsSlice.reducer;
