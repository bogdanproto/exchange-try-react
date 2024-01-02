import { PayloadAction } from '@reduxjs/toolkit';
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

  state.isRefreshing = false;
  state.errorAuth = null;
  state.user.avatarCloudURL = avatarCloudURL;
};

//--------------Profile User-----------------

export const handleFulfilledProfile = (
  state: ISliceAuthUser,
  action: PayloadAction<IUserProfileSuccess>
) => {
  const { name, phone, experience } = action.payload;

  state.isRefreshing = false;
  state.errorAuth = null;
  state.user.name = name;
  state.user.phone = phone;
  state.user.experience = experience;
};

//--------------Eqpts update User-----------------

export const handleFulfilledUpdEqpts = (
  state: ISliceAuthUser,
  action: PayloadAction<IEqptItem>
) => {
  const objEqpt = action.payload;

  state.isRefreshing = false;
  state.errorAuth = null;
  state.user.eqpts = [...state.user.eqpts, objEqpt];
};

//--------------Eqpts update User-----------------

export const handleFulfilledDeleteEqpt = (
  state: ISliceAuthUser,
  action: PayloadAction<IEqptItem>
) => {
  const { _id } = action.payload;
  const { eqpts } = state.user;

  const updateEqpts = eqpts.filter((item: IEqptItem) => item._id !== _id);

  state.isRefreshing = false;
  state.errorAuth = null;
  state.user.eqpts = updateEqpts;
};

//--------------- Rejected-------------------

export const handleRejected = (
  state: ISliceAuthUser,
  action: PayloadAction<any>
) => {
  state.isRefreshing = false;
  state.errorAuth = action.payload;
};
