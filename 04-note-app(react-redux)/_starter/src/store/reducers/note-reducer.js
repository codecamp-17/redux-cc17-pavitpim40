import { ADD_NOTE, DELETE_NOTE } from '../actions/note-action';

export const noteReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [...state, action.payload];
    case DELETE_NOTE:
      return state.filter((n) => n.id !== action.payload);
    default:
      return state;
  }
};
