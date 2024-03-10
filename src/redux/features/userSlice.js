import { createSlice } from '@reduxjs/toolkit';

const USER_KEY = 'user';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: [],
    currentUser: null,
  },
  reducers: {
    createUser: (state, action) => {
      state.users.push(action.payload);
      localStorage.setItem(USER_KEY, JSON.stringify(state.users));
  },
    loginUser: (state, action) => {
      state.currentUser = action.payload;
      localStorage.setItem(USER_KEY, JSON.stringify(action.payload));
    },
    logoutUser: (state) => {
      state.currentUser = null;
      localStorage.removeItem(USER_KEY);
    },
  },
});

export const {createUser, loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
