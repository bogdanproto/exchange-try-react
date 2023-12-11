import { createSlice } from '@reduxjs/toolkit';
import {
  signUpUser,
  logInUser,
  logOutUser,
  refreshUser,
} from './operationsAuth';
import { ISliceAuthUser } from 'interfaces/userInterface';
import {
  handleFulfilledLogIn,
  handleFulfilledLogOut,
  handleFulfilledRefresh,
  handleFulfilledSignUp,
  handlePendingAuth,
  handleRejectedAuth,
} from './handlesAuthStatus';
import { updUserAvatar } from './operationsUserProfile';
import {
  handleFulfilledAvatar,
  handleRejected,
} from './handlesUserProfileStatus';

const initialState: ISliceAuthUser = {
  user: {
    name: null,
    email: null,
    phone: null,
    avatarCloudURL: null,
    mainsport: null,
    equipments: null,
    sports: null,
  },
  token: null,
  isLoggedIn: false,
  errorAuth: null,
  isRefreshing: false,
  isAppLoaded: false,
};

const authUserSlice = createSlice({
  name: 'authUser',
  initialState,
  reducers: {
    // fill in primary logic here
  },
  extraReducers: builder => {
    builder
      .addCase(signUpUser.pending, handlePendingAuth)
      .addCase(signUpUser.fulfilled, handleFulfilledSignUp)
      .addCase(signUpUser.rejected, handleRejectedAuth)
      .addCase(logInUser.pending, handlePendingAuth)
      .addCase(logInUser.fulfilled, handleFulfilledLogIn)
      .addCase(logInUser.rejected, handleRejectedAuth)
      .addCase(logOutUser.pending, handlePendingAuth)
      .addCase(logOutUser.fulfilled, handleFulfilledLogOut)
      .addCase(logOutUser.rejected, handleRejectedAuth)
      .addCase(refreshUser.pending, handlePendingAuth)
      .addCase(refreshUser.fulfilled, handleFulfilledRefresh)
      .addCase(refreshUser.rejected, handleRejectedAuth)
      .addCase(updUserAvatar.pending, handlePendingAuth)
      .addCase(updUserAvatar.fulfilled, handleFulfilledAvatar)
      .addCase(updUserAvatar.rejected, handleRejected);
  },
});

export const userAuthReducer = authUserSlice.reducer;
