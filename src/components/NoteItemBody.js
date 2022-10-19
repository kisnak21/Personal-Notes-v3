import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function NoteItemBody({ title, body, createdAt, id }) {
  return (
    <>
      <h3 className='note-item__title'>
        <Link to={`/notes/${id}`}>{title}</Link>
      </h3>
      <p className='note-item__createdAt'>{createdAt}</p>
      <p className='note-item__body'>{body}</p>
    </>
  );
}

NoteItemBody.proptype = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default NoteItemBody;
