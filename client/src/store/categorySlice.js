import {createAsyncThunk, createSelector, createSlice} from '@reduxjs/toolkit';
import categoryService from '../services/category.service';
// import generateErrorMessage from '../utils/generateErrorMessage';

export const uploadCategoriesList = createAsyncThunk(
    'categories/fetchStatus',
    async (_, {rejectWithValue}) => {
      try {
        return await categoryService.get(); // Повертаємо результат у випадку успіху
      } catch (err) {
        return rejectWithValue(err.response.data); // Обробка помилок
      }
    },
);
const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    entities: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    //    categoriesRequested: (state) => {
    //      state.isLoading = true;
    //    },
    //    categoriesReceived: (state, action) => {
    //      state.isLoading = false;
    //      state.entities = action.payload;
    //    },
    //    categoriesRequestFailed: (state, action) => {
    //      state.isLoading = false;
    //      state.error = action.payload;
    //    },
  },
  extraReducers: (builder) => {
    builder
        .addCase(uploadCategoriesList.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(uploadCategoriesList.fulfilled, (state, action) => {
          state.isLoading = false;
          state.entities = action.payload;
        })
        .addCase(uploadCategoriesList.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        });
  }});


// export const uploadCategoriesList = () => async (dispatch) => {
//  dispatch(categoriesRequested());
//  try {
//    const data = await categoryService.get();
//    dispatch(categoriesReceived(data));
//  } catch (error) {
//    if (error.code === 'ERR_NETWORK') {
//      dispatch(categoriesRequestFailed(generateErrorMessage[error.code]));
//    } else {
//      dispatch(categoriesRequestFailed(error));
//    }
//  }
// };
// export const {
//  categoriesRequested,
//  categoriesReceived,
//  categoriesRequestFailed,
// } = categoriesSlice.actions;

const selectCategories = () => (state) => state.categories.entities;
export const getCategories = createSelector(
    [selectCategories],
    (entities)=> entities,
);
const selectIsCategoriesLoading = () => (state) => state.categories.isLoading;
export const getCategoriesLoadingStatus = createSelector(
    [selectIsCategoriesLoading],
    (isLoading)=> isLoading,
);
const selectCategoriesError = () => (state) => state.categories.error;
export const getCategoriesError = createSelector(
    [selectCategoriesError],
    (error) => error,
);

export default categoriesSlice.reducer;
