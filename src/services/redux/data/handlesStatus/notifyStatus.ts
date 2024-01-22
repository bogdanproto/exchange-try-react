import { PayloadAction } from '@reduxjs/toolkit';
import { INotifys, ISliceData } from 'interfaces';

export const handleFulfilledGetAllNotify = (
  state: ISliceData,
  action: PayloadAction<INotifys>
) => {
  state.notifications = action.payload;
  state.errorData = null;
};

export const handlePendingNotify = (state: ISliceData) => {
  state.errorData = null;
};

export const handleRejectedNotify = (
  state: ISliceData,
  action: PayloadAction<any>
) => {
  state.errorData = action.payload;
};
