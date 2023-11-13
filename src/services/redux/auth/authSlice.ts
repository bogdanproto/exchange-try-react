import { createSlice } from '@reduxjs/toolkit';

interface AuthUser {
  user: { name: string | null; email: string | null };
  uid: string | null;
  isLoggedIn: boolean;
  errorAuth: { status: string | null; data: string | null };
  isRefreshing: string | null;
}

const initialState: AuthUser = {
  user: { name: null, email: null },
  uid: null,
  isLoggedIn: false,
  errorAuth: { status: null, data: null },
  isRefreshing: null,
};

const authUserSlice = createSlice({
  name: 'authUser',
  initialState,
  reducers: {
    // fill in primary logic here
  },
  extraReducers: builder => {
    builder.addCase('signInUser.pending', (state, action) => {});
  },
});

export const userAuthReducer = authUserSlice.reducer;
