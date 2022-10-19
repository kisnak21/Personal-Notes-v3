import React, { useContext } from "react";
import LocaleContext from "../contexts/LocaleContext";

const Loading = () => {
  const { locale } = useContext(LocaleContext);

  return (
    <p className='text-loading'>
      {locale === "id" ? "Memuat Catatan ..." : "Fetching notes ..."}
    </p>
  );
};

export default Loading;
