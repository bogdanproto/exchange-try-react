import { PayloadAction } from '@reduxjs/toolkit';
import {
  ISliceAuthUser,
  IUserLogInSuccess,
  IUserRefresh,
  IUserSignUpSuccess,
} from '../../../interfaces/userInterface';

//--------------SignUp User-----------------

export const handleFulfilledSigUp = (
  state: ISliceAuthUser,
  action: PayloadAction<IUserSignUpSuccess>
) => {
  const { name, email, uid } = action.payload;
  state.isRefreshing = false;
  state.isLoggedIn = true;
  state.errorAuth = null;
  state.token = uid;
  state.user.name = name;
  state.user.email = email;
};

//--------------LogIn User-----------------

export const handleFulfilledLogIn = (
  state: ISliceAuthUser,
  action: PayloadAction<IUserLogInSuccess>
) => {
  const { email, uid } = action.payload;
  state.isRefreshing = false;
  state.isLoggedIn = true;
  state.errorAuth = null;
  state.token = uid;
  state.user.email = email;
};

//--------------LogOut User-----------------

export const handleFulfilledLogOut = (state: ISliceAuthUser) => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
  state.errorAuth = null;
  state.isRefreshing = false;
};

// --------------Refresh User-----------------

export const handleFulfilledRefresh = (
  state: ISliceAuthUser,
  action: PayloadAction<IUserRefresh>
) => {
  const { email, uid, isLoggedIn } = action.payload;
  state.isRefreshing = false;
  state.errorAuth = null;
  state.isLoggedIn = isLoggedIn;
  state.isAppLoaded = true;
  state.token = uid;
  state.user.email = email;
};

//---------------Pending and Rejected-------------------
export const handlePendingAuth = (state: ISliceAuthUser) => {
  state.isRefreshing = true;
  state.errorAuth = null;
};

export const handleRejectedAuth = (
  state: ISliceAuthUser,
  action: PayloadAction<any>
) => {
  state.isRefreshing = false;
  state.errorAuth = action.payload;
};
