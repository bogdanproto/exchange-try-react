import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from 'services/redux/store';
import { IUserLogin, IUserSignUp } from 'interfaces/user/userInterface';
import { asyncThunkDecoratorUser, handleErrors } from 'services/helpers';
import {
  signUpAPI,
  logInAPI,
  logOutAPI,
  refreshUserAPI,
  setAuthToken,
  removeAuthToken,
} from 'services/api';

//--------------SignUp User-----------------
export const signUpUser = createAsyncThunk(
  'authUser/signUpUser',
  asyncThunkDecoratorUser(async (objSignUp: IUserSignUp) => {
    const { token, user } = await signUpAPI(objSignUp);
    setAuthToken(token);

    return {
      user,
      token,
    };
  })
);

//--------------LogIn User-----------------
export const logInUser = createAsyncThunk(
  'authUser/logInUser',
  asyncThunkDecoratorUser(async (objLogin: IUserLogin) => {
    const { token, user } = await logInAPI(objLogin);
    setAuthToken(token);

    return {
      user,
      token,
    };
  })
);

//--------------LogOut User-----------------
export const logOutUser = createAsyncThunk(
  'authUser/logOutUser',
  asyncThunkDecoratorUser(async () => {
    await logOutAPI();
    removeAuthToken();
  })
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
