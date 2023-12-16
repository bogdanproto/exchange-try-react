import { PayloadAction } from '@reduxjs/toolkit';
import {
  ISliceAuthUser,
  IUserLogInSuccess,
  IUserSignUpSuccess,
} from 'interfaces/userInterface';

//--------------SignUp User-----------------

export const handleFulfilledSignUp = (
  state: ISliceAuthUser,
  action: PayloadAction<IUserSignUpSuccess>
) => {
  const { user, token } = action.payload;

  state.isRefreshing = false;
  state.isLoggedIn = true;
  state.errorAuth = null;
  state.token = token;
  state.user = { ...state.user, ...user };
};

//--------------LogIn User-----------------

export const handleFulfilledLogIn = (
  state: ISliceAuthUser,
  action: PayloadAction<IUserLogInSuccess>
) => {
  const { user, token } = action.payload;
  state.isRefreshing = false;
  state.isLoggedIn = true;
  state.errorAuth = null;
  state.token = token;
  state.user = { ...state.user, ...user };
};

//--------------LogOut User-----------------

export const handleFulfilledLogOut = (state: ISliceAuthUser) => {
  const { user } = state;

  user.name = null;
  user.email = null;
  user.phone = null;
  user.avatarCloudURL = null;
  user.mainsport = null;
  user.eqpts = [];
  user.sports = null;

  state.token = null;
  state.isLoggedIn = false;
  state.errorAuth = null;
  state.isRefreshing = false;
};

// --------------Refresh User-----------------

export const handleFulfilledRefresh = (
  state: ISliceAuthUser,
  action: PayloadAction<IUserLogInSuccess>
) => {
  const { user, token } = action.payload;
  state.isRefreshing = false;
  state.errorAuth = null;
  state.isLoggedIn = true;
  state.isAppLoaded = true;
  state.token = token;
  state.user = { ...state.user, ...user };
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
  state.isAppLoaded = true;
  state.errorAuth = action.payload;
};
