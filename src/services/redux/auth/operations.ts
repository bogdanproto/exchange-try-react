import { createAsyncThunk } from '@reduxjs/toolkit';
import { signUpAPI, logInAPI, setAuthToken } from '../../api/auth/authAPI';
import { IUserLogin, IUserSignUp } from '../../../interfaces/userInterface';
import { handleErrors } from './handleErrors';

export const signUpUser = createAsyncThunk(
  'authUser/signUpUser',
  async (objSignUp: IUserSignUp, thunkAPI) => {
    try {
      const { token, user } = await signUpAPI(objSignUp);
      setAuthToken(token);

      return {
        name: user.name,
        email: user.email,
        token,
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(handleErrors(error.response?.data));
    }
  }
);

export const logInUser = createAsyncThunk(
  'authUser/logInUser',
  async (objLogin: IUserLogin, thunkAPI) => {
    try {
      const { token, user } = await logInAPI(objLogin);
      setAuthToken(token);

      return {
        name: user.name,
        email: user.email,
        token,
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(handleErrors(error.response?.data));
    }
  }
);

export const logOutUser = createAsyncThunk(
  'authUser/logOutUser',
  async (_, thunkAPI) => {
    try {
      await signOut(auth);

      return await authObserver();
    } catch (error: any) {
      return thunkAPI.rejectWithValue(errorMessage.LOGOUT);
    }
  }
);

// export const refreshUser = createAsyncThunk(
//   'authUser/refreshUser',
//   async (_, thunkAPI) => {
//     try {
//       return await authObserver();
//     } catch (error: any) {
//       return thunkAPI.rejectWithValue(errorMessage.LOADING);
//     }
//   }
// );
