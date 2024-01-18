import { ISliceAuthUser } from 'interfaces';

export const setErrorAuth = (state: ISliceAuthUser) => {
  state.isLoggedIn = false;
};
