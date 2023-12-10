import { PayloadAction } from '@reduxjs/toolkit';
import { ISliceAuthUser, IUserAvatarSuccess } from 'interfaces/userInterface';

//--------------SignUp User-----------------

export const handleFulfilledAvatar = (
  state: ISliceAuthUser,
  action: PayloadAction<IUserAvatarSuccess>
) => {
  const { avatarCloudURL } = action.payload;
  console.log(avatarCloudURL);

  state.isRefreshing = false;
  state.errorAuth = null;
  state.user.avatarCloudURL = avatarCloudURL;
};

//--------------- Rejected-------------------

export const handleRejected = (
  state: ISliceAuthUser,
  action: PayloadAction<any>
) => {
  state.isRefreshing = false;
  state.errorAuth = action.payload;
};
