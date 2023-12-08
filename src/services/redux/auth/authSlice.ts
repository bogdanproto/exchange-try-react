import { createSlice } from '@reduxjs/toolkit';
import { signUpUser, logInUser, logOutUser, refreshUser } from './operations';
import { ISliceAuthUser } from 'interfaces/userInterface';
import {
  handleFulfilledLogIn,
  handleFulfilledLogOut,
  handleFulfilledRefresh,
  handleFulfilledSigUp,
  handlePendingAuth,
  handleRejectedAuth,
} from './handlesOperationsStatus';

const initialState: ISliceAuthUser = {
  user: { name: null, email: null },
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
      .addCase(signUpUser.fulfilled, handleFulfilledSigUp)
      .addCase(signUpUser.rejected, handleRejectedAuth)
      .addCase(logInUser.pending, handlePendingAuth)
      .addCase(logInUser.fulfilled, handleFulfilledLogIn)
      .addCase(logInUser.rejected, handleRejectedAuth)
      .addCase(logOutUser.pending, handlePendingAuth)
      .addCase(logOutUser.fulfilled, handleFulfilledLogOut)
      .addCase(logOutUser.rejected, handleRejectedAuth)
      .addCase(refreshUser.pending, handlePendingAuth)
      .addCase(refreshUser.fulfilled, handleFulfilledRefresh)
      .addCase(refreshUser.rejected, handleRejectedAuth);
  },
});

export const userAuthReducer = authUserSlice.reducer;
