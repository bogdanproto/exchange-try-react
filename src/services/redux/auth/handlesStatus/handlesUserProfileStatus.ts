import { PayloadAction } from '@reduxjs/toolkit';
import { successUserMsg } from 'const';
import {
  IEqptItem,
  ISliceAuthUser,
  IUserAvatarSuccess,
  IUserProfileSuccess,
} from 'interfaces/user/userInterface';

//--------------Avatar User-----------------

export const handleFulfilledAvatar = (
  state: ISliceAuthUser,
  action: PayloadAction<IUserAvatarSuccess>
) => {
  const { avatarCloudURL } = action.payload;
  state.user.avatarCloudURL = avatarCloudURL;

  state.isRefreshing = false;
  state.errorAuth = null;
};

//--------------Profile User-----------------

export const handleFulfilledProfile = (
  state: ISliceAuthUser,
  action: PayloadAction<IUserProfileSuccess>
) => {
  state.user = { ...state.user, ...action.payload };

  state.successMsg = successUserMsg.PROFILE;
  state.isRefreshing = false;
  state.errorAuth = null;
};

//--------------Eqpts update User-----------------

export const handleFulfilledUpdEqpts = (
  state: ISliceAuthUser,
  action: PayloadAction<IEqptItem>
) => {
  state.user.eqpts = [...state.user.eqpts, action.payload];

  state.successMsg = successUserMsg.EQPTSCREATE;
  state.isRefreshing = false;
  state.errorAuth = null;
};

//--------------Eqpts update User-----------------

export const handleFulfilledDeleteEqpt = (
  state: ISliceAuthUser,
  action: PayloadAction<IEqptItem>
) => {
  const { _id } = action.payload;
  const { eqpts } = state.user;

  const updateEqpts = eqpts.filter((item: IEqptItem) => item._id !== _id);
  state.user.eqpts = updateEqpts;

  state.successMsg = successUserMsg.EQPTSDELETE;
  state.isRefreshing = false;
  state.errorAuth = null;
};

//--------------- Rejected-------------------

export const handleRejected = (
  state: ISliceAuthUser,
  action: PayloadAction<any>
) => {
  state.isRefreshing = false;
  state.errorAuth = action.payload;
};
