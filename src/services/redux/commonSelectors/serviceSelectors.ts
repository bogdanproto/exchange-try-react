import { RootState } from '../store';

export const selectNotification = (state: RootState) => {
  const { errorData, isLoading } = state.data;
  const { errorAuth, isRefreshing } = state.authUser;

  return {
    error: errorAuth || errorData,
    isLoading: isRefreshing || isLoading,
  };
};

export const selectIsAppLoaded = (state: RootState) =>
  state.authUser.isAppLoaded;
