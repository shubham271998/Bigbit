import {createSlice} from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {isLoggedIn: false},

  reducers: {
    logOut: state => {
      state.isLoggedIn = false;
    },
    logIn: state => {
      state.isLoggedIn = true;
    },
  },
});

export const {logOut, logIn} = authSlice.actions;
export default authSlice.reducer;
