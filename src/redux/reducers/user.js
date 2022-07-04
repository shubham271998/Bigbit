import {createSlice} from '@reduxjs/toolkit';

export const nameSlice = createSlice({
  name: 'user',
  initialState: {name: 'Guest', email: 'abc@gmail.com'},
  reducers: {
    setUserName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const {setUserName} = nameSlice.actions;

export default nameSlice.reducer;
