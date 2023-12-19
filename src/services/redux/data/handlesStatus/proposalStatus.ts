import { PayloadAction } from '@reduxjs/toolkit';
import { IProposalPending, ISliceData } from 'interfaces';

export const handleFulfilledGetAllProposalPending = (
  state: ISliceData,
  action: PayloadAction<IProposalPending[]>
) => {
  state.proposalsPending = action.payload;
  state.isLoading = false;
  state.errorData = null;
};

export const handleFulfilledCreateProposal = (
  state: ISliceData,
  action: PayloadAction<IProposalPending>
) => {
  state.proposalsPending = [...state.proposalsPending, action.payload];
  state.isLoading = false;
  state.errorData = null;
};