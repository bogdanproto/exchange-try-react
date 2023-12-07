import { createAsyncThunk } from '@reduxjs/toolkit';
import { signUpAPI } from '../../api/auth/authAPI';
import { IUserLogin, IUserSignUp } from '../../../interfaces/userInterface';
import { handleErrors } from './handleErrors';

export const signUpUser = createAsyncThunk(
  'authUser/signUpUser',
  async (objSignUp: IUserSignUp, thunkAPI) => {
    try {
      const {
        token,
        user: { name, email },
      } = await signUpAPI(objSignUp);
      return {
        name,
        email,
        token,
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(handleErrors(error.response.data));
    }
  }
);

// export const logInUser = createAsyncThunk(
//   'authUser/logInUser',
//   async (objLogin: IUserLogin, thunkAPI) => {
//     try {
//       const { email, password } = objLogin;
//       const userCredential = await signInWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       return {
//         email: userCredential.user.email,
//         uid: userCredential.user.uid,
//       };
//     } catch (error: any) {
//       return thunkAPI.rejectWithValue(handleErrors(error.code));
//     }
//   }
// );

// export const logOutUser = createAsyncThunk(
//   'authUser/logOutUser',
//   async (_, thunkAPI) => {
//     try {
//       await signOut(auth);

//       return await authObserver();
//     } catch (error: any) {
//       return thunkAPI.rejectWithValue(errorMessage.LOGOUT);
//     }
//   }
// );

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
