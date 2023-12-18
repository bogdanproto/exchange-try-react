import { RootState } from '../store';

export const selectService = (state: RootState) => {
  const { errorData, isLoading } = state.data;
  const { errorAuth, isRefreshing, isAppLoaded } = state.authUser;

  return {
    error: errorAuth || errorData,
    isLoading: isRefreshing || isLoading,
    isAppLoaded,
  };
};
