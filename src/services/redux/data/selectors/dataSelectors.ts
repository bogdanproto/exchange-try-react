import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'services/redux/store';

export const selectSpots = (state: RootState) => state.data.spots;

export const selectProposals = (state: RootState) => state.data.proposals.items;

export const selectProposalsPage = (state: RootState) =>
  state.data.proposals.page;

export const selectProposalsTotal = (state: RootState) =>
  state.data.proposals.total;

export const selectProposalsCurrentTotal = (state: RootState) =>
  state.data.proposals.items.length;

export const selectProposalsInfo = createSelector(
  [selectProposalsPage, selectProposalsTotal, selectProposalsCurrentTotal],
  (page, total, currentTotal) => ({ page, total, currentTotal })
);

export const selectProposalsPending = (state: RootState) =>
  state.data.proposalsPending;

export const selectProposalAccepted = (state: RootState) =>
  state.data.proposalsAccepted;

export const selectProposalHistory = (state: RootState) =>
  state.data.proposalsHistory;
