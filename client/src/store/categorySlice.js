import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';
import categoryService from '../services/category.service';
import generateErrorMessage from '../utils/generateErrorMessage';

export const fetchCategoriesList = createAsyncThunk(
  'categories/fetchStatus',
  async (_, { rejectWithValue }) => {
    try {
      return await categoryService.get();
    } catch (error) {
      if (error.code === 'ERR_NETWORK') {
        return rejectWithValue(generateErrorMessage[error.code]);
      }
      return rejectWithValue(error || 'SERVER_ERROR');
    }
  }
);
const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    entities: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoriesList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCategoriesList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.entities = action.payload;
      })
      .addCase(fetchCategoriesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

const selectCategories = (state) => state.categories.entities;
export const getCategories = createSelector([selectCategories], (entities) => entities);
const selectIsCategoriesLoading = (state) => state.categories.isLoading;
export const getCategoriesLoadingStatus = createSelector(
  [selectIsCategoriesLoading],
  (isLoading) => isLoading
);
const selectCategoriesError = (state) => state.categories.error;
export const getCategoriesError = createSelector([selectCategoriesError], (error) => error);

export default categoriesSlice.reducer;
