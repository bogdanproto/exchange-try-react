import { PayloadAction } from '@reduxjs/toolkit';
import { ISliceData, ISpot } from 'interfaces';

export const handleFulfilledGetAllSpots = (
  state: ISliceData,
  action: PayloadAction<ISpot[]>
) => {
  state.spots = action.payload;
  state.isLoading = false;
  state.errorData = null;
};
