import React from "react";
import { useNavigate } from "react-router-dom";
import NoteInput from "../components/NoteInput";
import { addNote } from "../utils/network-data";

const AddNewPage = () => {
  const navigate = useNavigate();

  const onAddNoteHandler = async (note) => {
    await addNote(note);
    navigate("/");
  };

  return (
    <div className='add-new-page'>
      <NoteInput addNote={onAddNoteHandler} />
    </div>
  );
};

export default AddNewPage;
