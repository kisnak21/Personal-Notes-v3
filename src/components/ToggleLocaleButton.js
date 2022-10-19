import React, { useContext } from "react";
import { BsTranslate } from "react-icons/bs";
import LocaleContext from "../contexts/LocaleContext";

const TogglelocaleButton = () => {
  const { toggleLocale } = useContext(LocaleContext);

  return (
    <button className='toggle-locale' type='button' onClick={toggleLocale}>
      <BsTranslate />
    </button>
  );
};

export default TogglelocaleButton;
