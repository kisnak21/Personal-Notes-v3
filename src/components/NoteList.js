import React from "react";
import NoteItem from "./NoteItem";
import PropTypes from "prop-types";

function NoteList({ notes, onDelete }) {
  return notes.length !== 0 ? (
    <section className='notes-list'>
      {notes.map((note) => (
        <NoteItem key={note.id} id={note.id} onDelete={onDelete} {...note} />
      ))}
    </section>
  ) : (
    <div className='notes-list-empty'>
      <p className='notes-list__empty'>Tidak ada catatan.</p>
    </div>
  );
}

NoteList.proptype = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NoteList;
