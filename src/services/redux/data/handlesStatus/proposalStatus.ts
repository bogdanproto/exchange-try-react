import { PayloadAction } from '@reduxjs/toolkit';
import { IProposalDelete, IProposal, ISliceData } from 'interfaces';
import {
  IProposalHistory,
  IProposals,
  ProposalStatusBack,
} from 'interfaces/data/proposal/IProposal';

export const handleFulfilledGetAllProposal = (
  state: ISliceData,
  action: PayloadAction<IProposals>
) => {
  const { page, items } = action.payload;
  if (page && page > 1) {
    state.proposals.items = [...state.proposals.items, ...items];
    state.proposals.page = page;
    state.isLoading = false;
    state.errorData = null;
  } else {
    state.proposals = action.payload;
    state.isLoading = false;
    state.errorData = null;
  }
};

export const handleFulfilledGetAllHistoryProposal = (
  state: ISliceData,
  action: PayloadAction<IProposalHistory[]>
) => {
  state.proposalsHistory = action.payload;
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

export const handleFulfilledGetAllProposalAccepted = (
  state: ISliceData,
  action: PayloadAction<IProposal[]>
) => {
  state.proposalsAccepted = action.payload;
  state.isLoading = false;
  state.errorData = null;
};

export const handleFulfilledCreateProposal = (
  state: ISliceData,
  action: PayloadAction<IProposal>
) => {
  state.proposals.items = [...state.proposals.items, action.payload];
  state.isLoading = false;
  state.errorData = null;
};

export const handleFulfilledDeleteProposal = (
  state: ISliceData,
  action: PayloadAction<IProposalDelete>
) => {
  const { _id } = action.payload;
  state.proposals.items = [...state.proposals.items].filter(
    item => item._id !== _id
  );
  state.isLoading = false;
  state.errorData = null;
};

export const handleFulfilledUpdateProposal = (
  state: ISliceData,
  action: PayloadAction<IProposal>
) => {
  const updProposal = action.payload;
  state.proposals.items = [...state.proposals.items].filter(
    proposal => proposal._id !== updProposal._id
  );
  state.proposals.items = [updProposal, ...state.proposals.items];
  state.isLoading = false;
  state.errorData = null;
};

export const handleFulfilledUpdateProposalByCustomer = (
  state: ISliceData,
  action: PayloadAction<IProposal>
) => {
  const updProposal = action.payload;

  const isProposalInPending = state.proposalsPending.find(
    ({ _id }) => _id === updProposal._id
  );
  if (isProposalInPending) {
    state.proposalsPending = state.proposalsPending.map(proposal =>
      proposal._id === updProposal._id ? updProposal : proposal
    );
  } else {
    state.proposals.items = state.proposals.items.filter(
      proposal => proposal._id !== updProposal._id
    );
    state.proposalsPending = [...state.proposalsPending, updProposal];
  }

  state.isLoading = false;
  state.errorData = null;
};

export const handleFulfilledRemoveOfferCustomer = (
  state: ISliceData,
  action: PayloadAction<IProposal>
) => {
  const updProposal = action.payload;
  state.proposalsPending = state.proposalsPending.filter(
    proposal => proposal._id !== updProposal._id
  );
  state.proposals.items = [...state.proposals.items, updProposal];
  state.isLoading = false;
  state.errorData = null;
};

export const handleFulfilledUpdateProposalStatus = (
  state: ISliceData,
  action: PayloadAction<IProposal>
) => {
  const updProposal = action.payload;

  state.proposalsPending = state.proposalsPending.filter(
    proposal => proposal._id !== updProposal._id
  );

  if (updProposal.statusProposal === ProposalStatusBack.accepted) {
    state.proposalsAccepted = [...state.proposalsAccepted, updProposal];
  } else {
    state.proposals.items = [...state.proposals.items, updProposal];
  }

  state.isLoading = false;
  state.errorData = null;
};

export const handleFulfilledCancelProposal = (
  state: ISliceData,
  action: PayloadAction<IProposalHistory>
) => {
  const updProposal = action.payload;

  state.proposalsAccepted = state.proposalsAccepted.filter(
    proposal => proposal._id !== updProposal._id
  );

  state.proposalsHistory = [...state.proposalsHistory, updProposal];

  state.isLoading = false;
  state.errorData = null;
};
