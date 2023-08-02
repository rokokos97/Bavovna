import {createSlice} from '@reduxjs/toolkit';
import categoryService from '../services/category.service';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    entities: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    categoriesRequested: (state) => {
      state.isLoading = true;
    },
    categoriesReceived: (state, action) => {
      state.isLoading = false;
      state.entities = action.payload;
    },
    categoriesRequestFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const uploadCategoriesList = () => async (dispatch) => {
  dispatch(categoriesRequested());
  try {
    const {data} = await categoryService.get();
    console.log(data);
    dispatch(categoriesReceived(data));
  } catch (error) {
    dispatch(categoriesRequestFailed(error));
  }
};

export const {
  categoriesRequested,
  categoriesReceived,
  categoriesRequestFailed,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;
