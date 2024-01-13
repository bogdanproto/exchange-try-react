import { PayloadAction } from '@reduxjs/toolkit';
import { IFilterProposals, ISliceData } from 'interfaces';

export const setFilterProposals = (
  state: ISliceData,
  action: PayloadAction<IFilterProposals>
) => {
  const { spot: newSpot, date: newDate } = action.payload;
  const { spot, date } = state.filter.filterProposals;

  if (newSpot !== spot) {
    state.filter.filterProposals.spot = newSpot;
  }
  if (newDate !== date) {
    state.filter.filterProposals.date = newDate;
  }
};
