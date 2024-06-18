// Action Const

export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';

// Action Creator
export function addNoteAction(newNote) {
  return { type: ADD_NOTE, payload: newNote };
}

export function deleteNoteAction(noteId) {
  return { type: DELETE_NOTE, payload: noteId };
}
