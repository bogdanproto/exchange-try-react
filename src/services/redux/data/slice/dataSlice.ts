import { createSlice } from '@reduxjs/toolkit';
import {
  handleFulfilledGetAllSpots,
  handlePendingData,
  handleRejectedData,
} from '../handlesStatus';
import { getAllSpots } from '../operations';
import { ISliceData } from 'interfaces';

const initialState: ISliceData = {
  proposals: [],
  spots: [],
  errorData: null,
  isLoading: false,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    // fill in primary logic here
  },
  extraReducers: builder => {
    builder
      .addCase(getAllSpots.pending, handlePendingData)
      .addCase(getAllSpots.rejected, handleRejectedData)
      .addCase(getAllSpots.fulfilled, handleFulfilledGetAllSpots);
  },
});

export const dataSliceReducer = dataSlice.reducer;
