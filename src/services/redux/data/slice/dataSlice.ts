import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  handleDefaultData,
  handleFulfilledCancelProposal,
  handleFulfilledCreateProposal,
  handleFulfilledDeleteProposal,
  handleFulfilledGetAllHistoryProposal,
  handleFulfilledGetAllNotify,
  handleFulfilledGetAllProposal,
  handleFulfilledGetAllProposalAccepted,
  handleFulfilledGetAllProposalPending,
  handleFulfilledGetAllSpots,
  handleFulfilledGetQntUnviewedNotify,
  handleFulfilledRemoveOfferCustomer,
  handleFulfilledUpdStatusAllNotify,
  handleFulfilledUpdateProposal,
  handleFulfilledUpdateProposalByCustomer,
  handleFulfilledUpdateProposalStatus,
  handlePendingData,
  handlePendingNotify,
  handleRejectedData,
  handleRejectedNotify,
} from '../handlesStatus';
import {
  cancelProposal,
  createProposal,
  deleteProposal,
  getAllHistoryProposal,
  getAllNotify,
  getAllProposal,
  getAllProposalAccepted,
  getAllProposalPending,
  getAllSpots,
  getQntUnviewedNotify,
  removeOfferCustomer,
  updateProposal,
  updateProposalByCustomer,
  updateProposalStatus,
} from '../operations';
import { ISliceData } from 'interfaces';
import { logOutUser } from 'services/redux/auth/operations/operationsAuth';
import {
  setFilterHistoryProposals,
  setFilterProposals,
  setSuccesMsgDefault,
} from '../reducers';
import { ProposalStatusBack } from 'interfaces/data/proposal/IProposal';
import { updateStatusNotifyToViewed } from '../operations/notify/updateStatusNotifyToViewed';

const initialState: ISliceData = {
  proposals: {
    items: [],
    page: null,
    limit: null,
    total: null,
  },
  proposalsPending: [],
  proposalsAccepted: [],
  proposalsHistory: [],
  notifications: {
    items: [],
    page: null,
    limit: null,
    total: null,
    totalNotViewed: null,
  },
  filter: {
    filterProposalsHistory: ProposalStatusBack.past,
    filterProposals: {
      spot: null,
      date: null,
    },
  },
  spots: [],
  errorData: null,
  succesMsg: null,
  isLoading: false,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    toFilterHistoryProposals: setFilterHistoryProposals,
    toFilterProposals: setFilterProposals,
    toSetSuccesMsgDefault: setSuccesMsgDefault,
  },
  extraReducers: builder => {
    builder
      .addCase(logOutUser.fulfilled, handleDefaultData)
      .addCase(getAllSpots.fulfilled, handleFulfilledGetAllSpots)
      .addCase(getAllProposal.fulfilled, handleFulfilledGetAllProposal)
      .addCase(
        getAllHistoryProposal.fulfilled,
        handleFulfilledGetAllHistoryProposal
      )
      .addCase(
        getAllProposalPending.fulfilled,
        handleFulfilledGetAllProposalPending
      )
      .addCase(
        getAllProposalAccepted.fulfilled,
        handleFulfilledGetAllProposalAccepted
      )
      .addCase(createProposal.fulfilled, handleFulfilledCreateProposal)
      .addCase(deleteProposal.fulfilled, handleFulfilledDeleteProposal)
      .addCase(updateProposal.fulfilled, handleFulfilledUpdateProposal)
      .addCase(
        updateProposalByCustomer.fulfilled,
        handleFulfilledUpdateProposalByCustomer
      )
      .addCase(
        removeOfferCustomer.fulfilled,
        handleFulfilledRemoveOfferCustomer
      )
      .addCase(
        updateProposalStatus.fulfilled,
        handleFulfilledUpdateProposalStatus
      )
      .addCase(cancelProposal.fulfilled, handleFulfilledCancelProposal)
      .addCase(getAllNotify.fulfilled, handleFulfilledGetAllNotify)
      .addCase(
        updateStatusNotifyToViewed.fulfilled,
        handleFulfilledUpdStatusAllNotify
      )
      .addCase(
        getQntUnviewedNotify.fulfilled,
        handleFulfilledGetQntUnviewedNotify
      )
      .addMatcher(
        isAnyOf(
          getAllSpots.pending,
          getAllProposal.pending,
          getAllHistoryProposal.pending,
          getAllProposalPending.pending,
          getAllProposalAccepted.pending,
          createProposal.pending,
          deleteProposal.pending,
          updateProposal.pending,
          updateProposalByCustomer.pending,
          removeOfferCustomer.pending,
          updateProposalStatus.pending,
          cancelProposal.pending
        ),
        handlePendingData
      )
      .addMatcher(
        isAnyOf(
          getAllSpots.rejected,
          getAllProposal.rejected,
          getAllHistoryProposal.rejected,
          getAllProposalPending.rejected,
          getAllProposalAccepted.rejected,
          createProposal.rejected,
          deleteProposal.rejected,
          updateProposal.rejected,
          updateProposalByCustomer.rejected,
          removeOfferCustomer.rejected,
          updateProposalStatus.rejected,
          cancelProposal.rejected
        ),
        handleRejectedData
      )
      .addMatcher(
        isAnyOf(
          getAllNotify.pending,
          updateStatusNotifyToViewed.pending,
          getQntUnviewedNotify.pending
        ),
        handlePendingNotify
      )
      .addMatcher(
        isAnyOf(
          getAllNotify.rejected,
          updateStatusNotifyToViewed.rejected,
          getQntUnviewedNotify.rejected
        ),
        handleRejectedNotify
      );
  },
});

export const dataSliceReducer = dataSlice.reducer;
export const {
  toFilterHistoryProposals,
  toFilterProposals,
  toSetSuccesMsgDefault,
} = dataSlice.actions;
