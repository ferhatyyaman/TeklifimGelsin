import { createSlice } from '@reduxjs/toolkit';
import { loginUser } from './userSlice';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    authenticateUser: (state) => {
      state.isLoggedIn = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser, (state) => {
      state.isLoggedIn = true;
    });
  },
});

export const { authenticateUser } = authSlice.actions;

export default authSlice.reducer;
