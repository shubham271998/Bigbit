import {configureStore} from '@reduxjs/toolkit';
import user from './reducers/user';
import authReducer from './reducers/auth';

const store = configureStore({
  reducer: {
    user: user,
    auth: authReducer,
  },
});

export default store;
