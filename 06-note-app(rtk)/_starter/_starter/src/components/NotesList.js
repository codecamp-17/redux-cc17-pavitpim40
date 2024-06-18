import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteNote } from '../store/slice/note-slice';

import './NotesList.css';

const NotesList = () => {
  const dispatch = useDispatch();
  const allNotes = useSelector((state) => state.r1);
  const handleDelete = (id) => {
    dispatch(deleteNote(id));
  };

  return (
    <>
      <h1>Notes List</h1>

      <div className='item-container'>
        {allNotes.map((note) => (
          <div className='item-content' key={note.id}>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            <button onClick={() => handleDelete(note.id)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default NotesList;
