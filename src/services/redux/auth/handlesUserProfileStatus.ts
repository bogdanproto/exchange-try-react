import { PayloadAction } from '@reduxjs/toolkit';
import {
  IEqptItem,
  ISliceAuthUser,
  IUserAvatarSuccess,
  IUserProfileSuccess,
} from 'interfaces/userInterface';

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
  const { name, phone } = action.payload;

  state.isRefreshing = false;
  state.errorAuth = null;
  state.user.name = name;
  state.user.phone = phone;
};

//--------------Eqpts update User-----------------

export const handleFulfilledUpdEqpts = (
  state: ISliceAuthUser,
  action: PayloadAction<IEqptItem>
) => {
  const objEqpt = action.payload;

  state.isRefreshing = false;
  state.errorAuth = null;
  state.user.equipments = [...state.user.equipments, objEqpt];
};

//--------------Eqpts update User-----------------

export const handleFulfilledDeleteEqpt = (
  state: ISliceAuthUser,
  action: PayloadAction<IEqptItem>
) => {
  const { _id } = action.payload;
  const { equipments } = state.user;

  const updateEqpts = equipments.filter((item: IEqptItem) => item._id !== _id);

  state.isRefreshing = false;
  state.errorAuth = null;
  state.user.equipments = updateEqpts;
};

//--------------- Rejected-------------------

export const handleRejected = (
  state: ISliceAuthUser,
  action: PayloadAction<any>
) => {
  state.isRefreshing = false;
  state.errorAuth = action.payload;
};
