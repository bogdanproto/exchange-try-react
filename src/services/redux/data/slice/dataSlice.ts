import { createSlice } from '@reduxjs/toolkit';
import {
  handleFulfilledCreateProposal,
  handleFulfilledGetAllProposalPending,
  handleFulfilledGetAllSpots,
  handlePendingData,
  handleRejectedData,
} from '../handlesStatus';
import {
  createProposal,
  getAllProposalPending,
  getAllSpots,
} from '../operations';
import { ISliceData } from 'interfaces';

const initialState: ISliceData = {
  proposalsPending: [],
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
      .addCase(getAllProposalPending.pending, handlePendingData)
      .addCase(getAllProposalPending.rejected, handleRejectedData)
      .addCase(
        getAllProposalPending.fulfilled,
        handleFulfilledGetAllProposalPending
      )
      .addCase(createProposal.pending, handlePendingData)
      .addCase(createProposal.rejected, handleRejectedData)
      .addCase(createProposal.fulfilled, handleFulfilledCreateProposal);
  },
});

export const dataSliceReducer = dataSlice.reducer;
