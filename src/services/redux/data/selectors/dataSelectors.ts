import { RootState } from 'services/redux/store';

export const selectSpots = (state: RootState) => state.data.spots;
export const selectProposals = (state: RootState) => state.data.proposals;
export const selectProposalsPending = (state: RootState) =>
  state.data.proposalsPending;
export const selectProposalAccepted = (state: RootState) =>
  state.data.proposalsAccepted;
