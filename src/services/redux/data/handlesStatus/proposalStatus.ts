import { PayloadAction } from '@reduxjs/toolkit';
import { IProposalDelete, IProposal, ISliceData } from 'interfaces';

export const handleFulfilledGetAllProposal = (
  state: ISliceData,
  action: PayloadAction<IProposal[]>
) => {
  state.proposals = action.payload;
  state.isLoading = false;
  state.errorData = null;
};

export const handleFulfilledGetAllProposalPending = (
  state: ISliceData,
  action: PayloadAction<IProposal[]>
) => {
  state.proposalsPending = action.payload;
  state.isLoading = false;
  state.errorData = null;
};

export const handleFulfilledCreateProposal = (
  state: ISliceData,
  action: PayloadAction<IProposal>
) => {
  state.proposals = [...state.proposals, action.payload];
  state.isLoading = false;
  state.errorData = null;
};

export const handleFulfilledDeleteProposal = (
  state: ISliceData,
  action: PayloadAction<IProposalDelete>
) => {
  const { _id } = action.payload;
  state.proposals = [...state.proposals].filter(item => item._id !== _id);
  state.isLoading = false;
  state.errorData = null;
};

export const handleFulfilledUpdateProposal = (
  state: ISliceData,
  action: PayloadAction<IProposal>
) => {
  const updProposal = action.payload;
  state.proposals = [...state.proposals].map(proposal =>
    proposal._id === updProposal._id ? updProposal : proposal
  );
  state.isLoading = false;
  state.errorData = null;
};
