import { createSlice } from '@reduxjs/toolkit';
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
      .addCase(updUserAvatar.rejected, handleRejected)
      .addCase(updUserProfile.pending, handlePendingAuth)
      .addCase(updUserProfile.fulfilled, handleFulfilledProfile)
      .addCase(updUserProfile.rejected, handleRejected)
      .addCase(updUserEqpts.pending, handlePendingAuth)
      .addCase(updUserEqpts.fulfilled, handleFulfilledUpdEqpts)
      .addCase(updUserEqpts.rejected, handleRejected)
      .addCase(delUserEqpt.pending, handlePendingAuth)
      .addCase(delUserEqpt.fulfilled, handleFulfilledDeleteEqpt)
      .addCase(delUserEqpt.rejected, handleRejected);
  },
});

export const userAuthReducer = authUserSlice.reducer;
