import { PayloadAction } from '@reduxjs/toolkit';
import { INotify, INotifys, ISliceData } from 'interfaces';

export const handleFulfilledGetAllNotify = (
  state: ISliceData,
  action: PayloadAction<INotifys>
) => {
  const { page, items } = action.payload;
  if (page && page > 1) {
    state.notifications.items = [...state.notifications.items, ...items];
    state.notifications.page = page;
  } else {
    state.notifications = action.payload;
  }

  state.errorData = null;
};

export const handleFulfilledUpdStatusAllNotify = (
  state: ISliceData,
  action: PayloadAction<number | null>
) => {
  state.notifications.items = state.notifications.items.map(
    (item: INotify) => ({ ...item, statusNotify: 'viewed' })
  );

  state.notifications.totalNotViewed = action.payload;
  state.errorData = null;
};

export const handleFulfilledGetQntUnviewedNotify = (
  state: ISliceData,
  action: PayloadAction<number>
) => {
  state.notifications.totalNotViewed = action.payload;
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
