import { RootState } from '../store';

export const selectNotification = (state: RootState) => {
  const { errorData, isLoading, succesMsg } = state.data;
  const { errorAuth, isRefreshing, successMsg: userSuccesMsg } = state.authUser;

  return {
    error: errorAuth || errorData,
    isLoading: isRefreshing || isLoading,
    errorAuth,
    succesMsg: succesMsg || userSuccesMsg,
  };
};

export const selectIsAppLoaded = (state: RootState) =>
  state.authUser.isAppLoaded;

export const selectErrorData = (state: RootState) => state.data.errorData;

export const selectIsDataLoading = (state: RootState) => state.data.isLoading;
