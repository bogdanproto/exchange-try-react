import { createSelector } from '@reduxjs/toolkit';
import { INotify } from 'interfaces';
import { RootState } from 'services/redux/store';

export const selectTotalNotViewedNotify = (state: RootState) =>
  state.data.notifications.totalNotViewed;

export const selectAllNotify = (state: RootState): INotify[] | [] =>
  state.data.notifications.items;

export const selectNotifyPage = (state: RootState) =>
  state.data.notifications.page;

export const selectNotifyTotal = (state: RootState) =>
  state.data.notifications.total;

export const selectNotifyCurrentTotal = (state: RootState) =>
  state.data.notifications.items.length;

export const selectNotifyInfo = createSelector(
  [selectNotifyPage, selectNotifyTotal, selectNotifyCurrentTotal],
  (page, total, currentTotal) => ({ page, total, currentTotal })
);
