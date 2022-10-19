import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import LocaleContext from "../contexts/LocaleContext";
import { GrCheckmark } from "react-icons/gr";

const NoteInput = ({ addNote }) => {
  const { locale } = useContext(LocaleContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onTitleHandler = (e) => {
    setTitle(e.target.value);
  };

  const onBodyHandler = (e) => {
    setBody(e.target.innerHTML);
  };

  const onSubmitHandler = () => {
    addNote({ title, body });
  };

  return (
    <>
      <div className='add-new-page__input'>
        <input
          className='add-new-page__input__title'
          placeholder={
            locale === "id" ? "Catatan rahasia..." : "Secret note..."
          }
          value={title}
          onChange={onTitleHandler}
        />
        <div
          className='add-new-page__input__body'
          data-placeholder={
            locale === "id" ? "Sebenarnya saya adalah ...." : "Actually i am..."
          }
          contentEditable='true'
          onInput={onBodyHandler}
        ></div>
      </div>
      <div className='add-new-page__action'>
        <button
          className='action'
          type='button'
          title='Simpan'
          onClick={onSubmitHandler}
        >
          <GrCheckmark />
        </button>
      </div>
    </>
  );
};

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
