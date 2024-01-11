import { PayloadAction } from '@reduxjs/toolkit';
import { ISliceData } from 'interfaces';
import { ProposalStatusBack } from 'interfaces/data/proposal/IProposal';

export const setFilterHistoryProposals = (
  state: ISliceData,
  action: PayloadAction<ProposalStatusBack>
) => {
  state.filter.filterProposalsHistory = action.payload;
};
