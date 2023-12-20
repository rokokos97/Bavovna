import {createSlice} from '@reduxjs/toolkit';
// import npService from '../services/np.service';

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
export const {
  citiesRequested,
  citiesReceived,
  citiesRequestFailed,
} = citiesSlice.actions;

export const uploadCitiesList = () => async (dispatch) => {
  dispatch(citiesRequested());
  try {
    //    const data = await npService.get();
    const data = [
      {'label': 'Kyiv', 'value': '8d5a980d-391c-11dd-90d9-001a92567626'},
      {'label': 'Kharkiv', 'value': 'db5c88e0-391c-11dd-90d9-001a92567626'},
      {'label': 'Odessa', 'value': 'db5c88d0-391c-11dd-90d9-001a92567626'},
      {'label': 'Dnipro', 'value': 'db5c88f0-391c-11dd-90d9-001a92567626'},
      {'label': 'Zaporizhzhia', 'value': 'db5c88c6-391c-11dd-90d9-001a92567626'},
      {'label': 'Lviv', 'value': 'db5c88f5-391c-11dd-90d9-001a92567626'},
      {'label': 'Kryvyi Rih', 'value': 'db5c890d-391c-11dd-90d9-001a92567626'},
      {'label': 'Mykolaiv', 'value': 'db5c888c-391c-11dd-90d9-001a92567626'},
      {'label': 'Mariupol', 'value': 'db5c8944-391c-11dd-90d9-001a92567626'},
      {'label': 'Vinnytsia', 'value': 'db5c88de-391c-11dd-90d9-001a92567626'},
      {'label': 'Poltava', 'value': 'db5c8892-391c-11dd-90d9-001a92567626'},
      {'label': 'Chernihiv', 'value': 'db5c897c-391c-11dd-90d9-001a92567626'},
      {'label': 'Cherkasy', 'value': 'db5c8902-391c-11dd-90d9-001a92567626'},
      {'label': 'Sumy', 'value': 'db5c88e5-391c-11dd-90d9-001a92567626'},
      {'label': 'Zhytomyr', 'value': 'db5c88c4-391c-11dd-90d9-001a92567626'},
      {'label': 'Kherson', 'value': 'db5c88cc-391c-11dd-90d9-001a92567626'},
      {'label': 'Khmelnytskyi', 'value': 'db5c88ac-391c-11dd-90d9-001a92567626'},
      {'label': 'Chernivtsi', 'value': 'e221d642-391c-11dd-90d9-001a92567626'},
      {'label': 'Rivne', 'value': 'db5c896a-391c-11dd-90d9-001a92567626'},
      {'label': 'Ivano-Frankivsk', 'value': 'db5c8904-391c-11dd-90d9-001a92567626'},
      {'label': 'Ternopil', 'value': 'db5c8900-391c-11dd-90d9-001a92567626'},
      {'label': 'Lutsk', 'value': 'db5c893b-391c-11dd-90d9-001a92567626'},
      {'label': 'Uzhhorod', 'value': 'e221d627-391c-11dd-90d9-001a92567626'},
    ];
    dispatch(citiesReceived(data));
  } catch (error) {
    dispatch(citiesRequestFailed(error));
  }
};

export const getCitiesList = () => (state) => state.cities.entities;

export default citiesSlice.reducer;
