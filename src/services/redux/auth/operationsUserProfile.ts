import { createAsyncThunk } from '@reduxjs/toolkit';
import { handleErrors } from './handleErrors';
import {
  deleteUserEqpt,
  updateUserAvatar,
  updateUserEqpts,
  updateUserProfile,
} from 'services/api/auth/userProfileAPI';
import { IEqptId, IEqptItemForm, IUserProfile } from 'interfaces/userInterface';

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

//--------------updateUserProfile-----------------
export const updUserProfile = createAsyncThunk(
  'authUser/updateUserProfile',
  async (objProfile: IUserProfile, thunkAPI) => {
    try {
      const { user } = await updateUserProfile(objProfile);
      return user;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(handleErrors(error.response?.data));
    }
  }
);

//--------------updateUserEqpts-----------------
export const updUserEqpts = createAsyncThunk(
  'authUser/updateUserEqpts',
  async (objEqpt: IEqptItemForm, thunkAPI) => {
    try {
      const { data } = await updateUserEqpts(objEqpt);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(handleErrors(error.response?.data));
    }
  }
);

//--------------deleteUserEqpt-----------------
export const delUserEqpt = createAsyncThunk(
  'authUser/deleteUserEqpt',
  async (id: IEqptId, thunkAPI) => {
    try {
      const {
        data: { deletedEqpt },
      } = await deleteUserEqpt(id);
      return deletedEqpt;
    } catch (error: any) {
      console.log(error.response?.data);
      return thunkAPI.rejectWithValue(handleErrors(error.response?.data));
    }
  }
);
