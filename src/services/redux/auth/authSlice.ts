import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  signUpUser,
  logInUser,
  logOutUser,
  refreshUser,
} from './operationsAuth';
import { ISliceAuthUser } from 'interfaces/user/userInterface';
import {
  handleFulfilledLogIn,
  handleFulfilledLogOut,
  handleFulfilledRefresh,
  handleFulfilledSignUp,
  handlePendingAuth,
  handleRejectedAuth,
} from './handlesAuthStatus';
import {
  delUserEqpt,
  updUserAvatar,
  updUserEqpts,
  updUserProfile,
} from './operationsUserProfile';
import {
  handleFulfilledAvatar,
  handleFulfilledDeleteEqpt,
  handleFulfilledProfile,
  handleFulfilledUpdEqpts,
  handleRejected,
} from './handlesUserProfileStatus';

const initialState: ISliceAuthUser = {
  user: {
    _id: null,
    name: null,
    email: null,
    phone: null,
    experience: null,
    avatarCloudURL: null,
    mainsport: null,
    eqpts: [],
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
      .addCase(signUpUser.fulfilled, handleFulfilledSignUp)
      .addCase(logInUser.fulfilled, handleFulfilledLogIn)
      .addCase(logOutUser.fulfilled, handleFulfilledLogOut)
      .addCase(refreshUser.fulfilled, handleFulfilledRefresh)
      .addCase(updUserAvatar.fulfilled, handleFulfilledAvatar)
      .addCase(updUserProfile.fulfilled, handleFulfilledProfile)
      .addCase(updUserEqpts.fulfilled, handleFulfilledUpdEqpts)
      .addCase(delUserEqpt.fulfilled, handleFulfilledDeleteEqpt)
      .addMatcher(
        isAnyOf(
          signUpUser.pending,
          logInUser.pending,
          logOutUser.pending,
          refreshUser.pending,
          updUserAvatar.pending,
          updUserProfile.pending,
          updUserEqpts.pending,
          delUserEqpt.pending
        ),
        handlePendingAuth
      )
      .addMatcher(
        isAnyOf(
          updUserAvatar.rejected,
          updUserProfile.rejected,
          updUserEqpts.rejected,
          delUserEqpt.rejected
        ),
        handleRejected
      )
      .addMatcher(
        isAnyOf(
          signUpUser.rejected,
          logInUser.rejected,
          logOutUser.rejected,
          refreshUser.rejected
        ),
        handleRejectedAuth
      );
  },
});

export const userAuthReducer = authUserSlice.reducer;
