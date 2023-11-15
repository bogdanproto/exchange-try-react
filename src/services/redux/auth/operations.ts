import { createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from '../../firebase/firebaseInit';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { IUserLogin, IUserSignUp } from '../../../interfaces/userInterface';
import { authObserver } from '../../firebase/fireBaseObserver';

export const signUpUser = createAsyncThunk(
  'authUser/signUpUser',
  async (objSignUp: IUserSignUp, thunkAPI) => {
    try {
      const { name, email, password } = objSignUp;
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return {
        name: name,
        email: userCredential.user.email,
        uid: userCredential.user.uid,
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const logInUser = createAsyncThunk(
  'authUser/logInUser',
  async (objLogin: IUserLogin, thunkAPI) => {
    try {
      const { email, password } = objLogin;
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      return {
        email: userCredential.user.email,
        uid: userCredential.user.uid,
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.code);
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
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'authUser/refreshUser',
  async (_, thunkAPI) => {
    try {
      return await authObserver();
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);
