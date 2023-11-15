import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import { userAuthReducer } from './auth/authSlice';

export const store = configureStore({
  reducer: {
    userAuth: userAuthReducer,
  },
});

export type TypeDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type TypeThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
