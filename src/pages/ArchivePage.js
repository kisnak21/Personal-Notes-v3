import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import NoteList from "../components/NoteList";
import SearchBar from "../components/Searchbar";
import LocaleContext from "../contexts/LocaleContext";
import Loading from "../components/Loading";
import { getArchivedNotes } from "../utils/network-data";

function ArchivePage() {
  const { locale } = useContext(LocaleContext);

  const [loading, setLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();

  const [notes, setNotes] = useState([]);
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get("keyword") || "";
  });

  const onKeywordChangeHandler = (keyword) => {
    setKeyword(keyword);
    setSearchParams({ keyword });
  };

  useEffect(() => {
    const fetchGetNotes = async () => {
      try {
        const { data } = await getArchivedNotes();
        setNotes(data);
        setLoading(false);
      } catch (error) {
        alert(error);
      }
    };

    fetchGetNotes();
  }, []);

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <section className='archives-page'>
      <h2>{locale === "id" ? "Catatan Arsip" : "Archived Note"}</h2>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      {loading && <Loading />}
      {filteredNotes.length !== 0 ? (
        <NoteList notes={filteredNotes} />
      ) : (
        <div className='notes-list-empty'>
          <p className='notes-list__empty'>
            {locale === "id" ? "Tidak ada catatan" : "No note"}.
          </p>
        </div>
      )}
    </section>
  );
}

export default ArchivePage;
