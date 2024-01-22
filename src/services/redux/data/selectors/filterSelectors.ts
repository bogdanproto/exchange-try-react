import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'services/redux/store';
import { selectProposalHistory } from './dataSelectors';
import {
  IProposalHistory,
  ProposalStatusBack,
} from 'interfaces/data/proposal/IProposal';

export const selectFilterHistoryProposals = (state: RootState) =>
  state.data.filter.filterProposalsHistory;

export const selectFilterProposalSpot = (state: RootState) =>
  state.data.filter.filterProposals.spot;

export const selectFilterProposalDate = (state: RootState) =>
  state.data.filter.filterProposals.date;

export const selectFilterProposal = createSelector(
  [selectFilterProposalSpot, selectFilterProposalDate],
  (spot, date) => {
    return { spot, date };
  }
);

export const selectFilteredHistoryProposals = createSelector(
  [selectProposalHistory, selectFilterHistoryProposals],
  (proposals, statusFilter) => {
    switch (statusFilter) {
      case ProposalStatusBack.past:
        return proposals.filter(
          (proposal: IProposalHistory) =>
            proposal.statusProposal !== ProposalStatusBack.cancelled
        );
      case ProposalStatusBack.cancelled:
        return proposals.filter(
          (proposal: IProposalHistory) =>
            proposal.statusProposal === ProposalStatusBack.cancelled
        );
    }
  }
);
