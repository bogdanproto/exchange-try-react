import { createSlice } from '@reduxjs/toolkit';
import {
  handleDefaultData,
  handleFulfilledCancelProposal,
  handleFulfilledCreateProposal,
  handleFulfilledDeleteProposal,
  handleFulfilledGetAllHistoryProposal,
  handleFulfilledGetAllProposal,
  handleFulfilledGetAllProposalAccepted,
  handleFulfilledGetAllProposalPending,
  handleFulfilledGetAllSpots,
  handleFulfilledRemoveOfferCustomer,
  handleFulfilledUpdateProposal,
  handleFulfilledUpdateProposalByCustomer,
  handleFulfilledUpdateProposalStatus,
  handlePendingData,
  handleRejectedData,
} from '../handlesStatus';
import {
  cancelProposal,
  createProposal,
  deleteProposal,
  getAllHistoryProposal,
  getAllProposal,
  getAllProposalAccepted,
  getAllProposalPending,
  getAllSpots,
  removeOfferCustomer,
  updateProposal,
  updateProposalByCustomer,
  updateProposalStatus,
} from '../operations';
import { ISliceData } from 'interfaces';
import { logOutUser } from 'services/redux/auth/operationsAuth';

const initialState: ISliceData = {
  proposals: [],
  proposalsPending: [],
  proposalsAccepted: [],
  proposalsHistory: [],
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
      .addCase(logOutUser.fulfilled, handleDefaultData)
      .addCase(getAllSpots.pending, handlePendingData)
      .addCase(getAllSpots.rejected, handleRejectedData)
      .addCase(getAllSpots.fulfilled, handleFulfilledGetAllSpots)
      .addCase(getAllProposal.pending, handlePendingData)
      .addCase(getAllProposal.rejected, handleRejectedData)
      .addCase(getAllProposal.fulfilled, handleFulfilledGetAllProposal)
      .addCase(getAllHistoryProposal.pending, handlePendingData)
      .addCase(getAllHistoryProposal.rejected, handleRejectedData)
      .addCase(
        getAllHistoryProposal.fulfilled,
        handleFulfilledGetAllHistoryProposal
      )
      .addCase(getAllProposalPending.pending, handlePendingData)
      .addCase(getAllProposalPending.rejected, handleRejectedData)
      .addCase(
        getAllProposalPending.fulfilled,
        handleFulfilledGetAllProposalPending
      )
      .addCase(getAllProposalAccepted.pending, handlePendingData)
      .addCase(getAllProposalAccepted.rejected, handleRejectedData)
      .addCase(
        getAllProposalAccepted.fulfilled,
        handleFulfilledGetAllProposalAccepted
      )
      .addCase(createProposal.pending, handlePendingData)
      .addCase(createProposal.rejected, handleRejectedData)
      .addCase(createProposal.fulfilled, handleFulfilledCreateProposal)
      .addCase(deleteProposal.pending, handlePendingData)
      .addCase(deleteProposal.rejected, handleRejectedData)
      .addCase(deleteProposal.fulfilled, handleFulfilledDeleteProposal)
      .addCase(updateProposal.pending, handlePendingData)
      .addCase(updateProposal.rejected, handleRejectedData)
      .addCase(updateProposal.fulfilled, handleFulfilledUpdateProposal)
      .addCase(updateProposalByCustomer.pending, handlePendingData)
      .addCase(updateProposalByCustomer.rejected, handleRejectedData)
      .addCase(
        updateProposalByCustomer.fulfilled,
        handleFulfilledUpdateProposalByCustomer
      )
      .addCase(removeOfferCustomer.pending, handlePendingData)
      .addCase(removeOfferCustomer.rejected, handleRejectedData)
      .addCase(
        removeOfferCustomer.fulfilled,
        handleFulfilledRemoveOfferCustomer
      )
      .addCase(updateProposalStatus.pending, handlePendingData)
      .addCase(updateProposalStatus.rejected, handleRejectedData)
      .addCase(
        updateProposalStatus.fulfilled,
        handleFulfilledUpdateProposalStatus
      )
      .addCase(cancelProposal.pending, handlePendingData)
      .addCase(cancelProposal.rejected, handleRejectedData)
      .addCase(cancelProposal.fulfilled, handleFulfilledCancelProposal);
  },
});

export const dataSliceReducer = dataSlice.reducer;
