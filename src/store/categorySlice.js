import {createSlice} from '@reduxjs/toolkit';

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

export const {
  categoriesRequested,
  categoriesReceived,
  categoriesRequestFailed,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;
