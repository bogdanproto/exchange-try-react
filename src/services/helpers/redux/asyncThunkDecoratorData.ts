import { toSetErrorAuth } from 'services/redux/auth/slice/authSlice';
import { handleErrors } from '../error/handleErrors';
import { argument } from 'interfaces/common/argument';

export const asyncThunkDecoratorData =
  (operation: any) => async (arg: any, thunkAPI: any) => {
    try {
      if (arg === argument.empty) {
        return await operation();
      }
      return await operation(arg);
    } catch (error: any) {
      if (error.code === 'ERR_CANCELED') {
        return thunkAPI.rejectWithValue(null);
      }
      if (error.response?.data.code === 'user_unauthorized_token') {
        thunkAPI.dispatch(toSetErrorAuth());
      }

      return thunkAPI.rejectWithValue(handleErrors(error.response?.data));
    }
  };
