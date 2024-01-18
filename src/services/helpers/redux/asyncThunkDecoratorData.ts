import { toSetErrorAuth } from 'services/redux/auth/authSlice';
import { handleErrors } from '../error/handleErrors';

export const asyncThunkDecoratorData =
  (operation: any) => async (arg: any, thunkAPI: any) => {
    try {
      return await operation(arg);
    } catch (error: any) {
      if (error.response?.data.code === 'user_unauthorized_token') {
        thunkAPI.dispatch(toSetErrorAuth());
      }
      return thunkAPI.rejectWithValue(handleErrors(error.response?.data));
    }
  };
