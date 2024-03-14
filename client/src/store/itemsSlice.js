import {createAsyncThunk, createSelector, createSlice} from '@reduxjs/toolkit';
import itemService from '../services/item.service';

export const fetchItemsList = createAsyncThunk(
    'items/fetchItemsList',
    async (_, {rejectWithValue}) => {
      try {
        return await itemService.get();
      } catch (error) {
        return rejectWithValue(error.response.data.response || 'SERVER_ERROR');
      }
    },
);
const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    entities: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder)=> {
    builder
        .addCase(fetchItemsList.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        .addCase(fetchItemsList.fulfilled, (state, action)=> {
          state.isLoading = false;
          state.entities = action.payload;
          state.error = null;
        })
        .addCase(fetchItemsList.rejected, (state, action)=> {
          state.isLoading = false;
          state.error = action.payload;
        });
  },
});
export const getItemsById = (id) => (state) => state.items.entities.find((item)=> item._id === id);
const selectItemsList = (state) => state.items.entities;
export const getItemsList = createSelector(
    [selectItemsList],
    (entities) => entities,
);
const selectItemsLoadingStatus =(state) => state.items.isLoading;
export const getItemsLoadingStatus = createSelector(
    [selectItemsLoadingStatus],
    (isLoading)=> isLoading,
);
const selectItemsError = (state) => state.items.error;
export const getItemsError = createSelector(
    [selectItemsError],
    (error) => error,
);
export default itemsSlice.reducer;
