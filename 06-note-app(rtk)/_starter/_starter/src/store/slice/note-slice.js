import { createSlice } from '@reduxjs/toolkit';

const noteSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    addNote: (state, action) => {
      // const newNote = [...state];
      // newNote.push(action.payload);
      // return newNote;
      state.push(action.payload); // immer ==> write code as mutate === immutate
    },
    deleteNote: (state, action) => {
      const foundIndex = state.findIndex((n) => n.id === action.payload);
      if (foundIndex !== -1) state.splice(foundIndex, 1);
    },
  },
});

const { addNote, deleteNote } = noteSlice.actions; // auto-gen : ActionCreator
const noteReducer = noteSlice.reducer; // auto-gen : ReducerFN

export { addNote, deleteNote };
export default noteReducer;
