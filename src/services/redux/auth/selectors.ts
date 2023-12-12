import { RootState } from '../store';

export const selectAuthUser = (state: RootState) => state.authUser;
export const selectUser = (state: RootState) => state.authUser.user;
