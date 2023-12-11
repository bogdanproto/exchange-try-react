import { createAsyncThunk } from '@reduxjs/toolkit';
import { handleErrors } from './handleErrors';
import { updateUserAvatar } from 'services/api/auth/userProfileAPI';

//--------------updateUserAvatar-----------------
export const updUserAvatar = createAsyncThunk(
  'authUser/updateUserAvatar',
  async (file: File, thunkAPI) => {
    try {
      const {
        user: { avatarCloudURL },
      } = await updateUserAvatar(file);

      return { avatarCloudURL };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(handleErrors(error.response?.data));
    }
  }
);
