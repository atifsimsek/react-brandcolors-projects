/* eslint-disable array-callback-return */
import { createSlice } from '@reduxjs/toolkit';
import BrandsData from '../../../brands.json';

const initialState = {
  data: [],
};

Object.keys(BrandsData).map((key) => {
  initialState.data.push(BrandsData[key]);
});

export const dataSlice = createSlice({
  name: 'Data',
  initialState: initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const dataReducer = dataSlice.reducer;
export const { setData } = dataSlice.actions;
