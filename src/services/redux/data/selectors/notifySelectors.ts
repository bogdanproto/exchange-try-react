import { INotify } from 'interfaces';
import { RootState } from 'services/redux/store';

export const selectTotalNotViewedNotify = (state: RootState) =>
  state.data.notifications.totalNotViewed;

export const selectAllNotify = (state: RootState): INotify[] | [] =>
  state.data.notifications.items;
