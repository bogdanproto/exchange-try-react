import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { userAuthReducer } from './auth/authSlice';
import { dataSliceReducer } from './data/slice/dataSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const dataPersistConfig = {
  key: 'data',
  storage,
  whitelist: [],
};

export const store = configureStore({
  reducer: {
    authUser: persistReducer(authPersistConfig, userAuthReducer),
    data: persistReducer(dataPersistConfig, dataSliceReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type TypeDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type TypeThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
