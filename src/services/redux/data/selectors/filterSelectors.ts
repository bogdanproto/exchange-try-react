import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'services/redux/store';
import { selectProposalHistory } from './dataSelectors';
import {
  IProposalHistory,
  ProposalStatusBack,
} from 'interfaces/data/proposal/IProposal';

export const selectFilterHistoryProposals = (state: RootState) =>
  state.data.filter.filterProposalsHistory;

export const selectFilteredHistoryProposals = createSelector(
  [selectProposalHistory, selectFilterHistoryProposals],
  (proposals, statusFilter) => {
    switch (statusFilter) {
      case ProposalStatusBack.accepted:
        return proposals.filter(
          (proposal: IProposalHistory) =>
            proposal.statusProposal === ProposalStatusBack.accepted
        );
      case ProposalStatusBack.cancelled:
        return proposals.filter(
          (proposal: IProposalHistory) =>
            proposal.statusProposal === ProposalStatusBack.cancelled
        );
    }
  }
);
