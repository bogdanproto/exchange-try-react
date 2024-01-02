import { createSlice } from '@reduxjs/toolkit';
import {
  handleFulfilledCreateProposal,
  handleFulfilledDeleteProposal,
  handleFulfilledGetAllProposal,
  handleFulfilledGetAllSpots,
  handleFulfilledUpdateProposal,
  handlePendingData,
  handleRejectedData,
} from '../handlesStatus';
import {
  createProposal,
  deleteProposal,
  getAllProposal,
  getAllSpots,
  updateProposal,
} from '../operations';
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
      .addCase(getAllSpots.fulfilled, handleFulfilledGetAllSpots)
      .addCase(getAllProposal.pending, handlePendingData)
      .addCase(getAllProposal.rejected, handleRejectedData)
      .addCase(getAllProposal.fulfilled, handleFulfilledGetAllProposal)
      .addCase(createProposal.pending, handlePendingData)
      .addCase(createProposal.rejected, handleRejectedData)
      .addCase(createProposal.fulfilled, handleFulfilledCreateProposal)
      .addCase(deleteProposal.pending, handlePendingData)
      .addCase(deleteProposal.rejected, handleRejectedData)
      .addCase(deleteProposal.fulfilled, handleFulfilledDeleteProposal)
      .addCase(updateProposal.pending, handlePendingData)
      .addCase(updateProposal.rejected, handleRejectedData)
      .addCase(updateProposal.fulfilled, handleFulfilledUpdateProposal);
  },
});

export const dataSliceReducer = dataSlice.reducer;
