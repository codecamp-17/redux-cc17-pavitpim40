import { configureStore } from '@reduxjs/toolkit';
import noteReducer from './slice/note-slice';

const store = configureStore({
  reducer: {
    r1: noteReducer,
  },
});

export default store;
