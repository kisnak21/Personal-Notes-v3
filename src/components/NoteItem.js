import React from "react";
import NoteItemBody from "./NoteItemBody";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils/FormatDate";

function NoteItem({ title, body, onDelete, createdAt, id }) {
  return (
    <article className='note-item'>
      <NoteItemBody
        id={id}
        title={title}
        body={body}
        createdAt={showFormattedDate(createdAt)}
        onDelete={onDelete}
      />
    </article>
  );
}

NoteItem.proptype = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NoteItem;
