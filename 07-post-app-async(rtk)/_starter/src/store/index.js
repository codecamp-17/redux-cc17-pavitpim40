import { configureStore } from '@reduxjs/toolkit';
import postReducer from './slices/postSlice';
import userSlice from './slices/userSlice';
const store = configureStore({
  reducer: {
    posts: postReducer,
    users: userSlice,
  },
});

export default store;
