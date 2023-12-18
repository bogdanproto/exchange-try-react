import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  signUpAPI,
  logInAPI,
  logOutAPI,
  refreshUserAPI,
  setAuthToken,
  removeAuthToken,
} from '../../api/auth/authAPI';
import { RootState } from 'services/redux/store';
import { IUserLogin, IUserSignUp } from 'interfaces/user/userInterface';
import { handleErrors } from 'services/helpers';

//--------------SignUp User-----------------
export const signUpUser = createAsyncThunk(
  'authUser/signUpUser',
  async (objSignUp: IUserSignUp, thunkAPI) => {
    try {
      const { token, user } = await signUpAPI(objSignUp);
      setAuthToken(token);

      return {
        user,
        token,
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(handleErrors(error.response?.data));
    }
  }
);

//--------------LogIn User-----------------
export const logInUser = createAsyncThunk(
  'authUser/logInUser',
  async (objLogin: IUserLogin, thunkAPI) => {
    try {
      const { token, user } = await logInAPI(objLogin);
      setAuthToken(token);

      return {
        user,
        token,
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(handleErrors(error.response?.data));
    }
  }
);

//--------------LogOut User-----------------
export const logOutUser = createAsyncThunk(
  'authUser/logOutUser',
  async (_, thunkAPI) => {
    try {
      await logOutAPI();
      removeAuthToken();
    } catch (error: any) {
      return thunkAPI.rejectWithValue(handleErrors(error.response?.data));
    }
  }
);

// --------------Refresh User-----------------
export const refreshUser = createAsyncThunk(
  'authUser/refreshUser',
  async (_, thunkAPI) => {
    try {
      const {
        authUser: { token },
      }: RootState = thunkAPI.getState();

      if (!token) {
        return thunkAPI.rejectWithValue(
          handleErrors({
            status: 401,
            message: 'user_unauthorized_token',
            code: 'user_unauthorized_token',
          })
        );
      }

      setAuthToken(token);

      const { user } = await refreshUserAPI();
      return {
        user,
        token,
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(handleErrors(error.response?.data));
    }
  }
);
