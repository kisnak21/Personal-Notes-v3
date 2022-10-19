import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DetailPageAction from "../components/DetailPageAction";
import { showFormattedDate } from "../utils/FormatDate";
import {
  archiveNote,
  deleteNote,
  getNote,
  unarchiveNote,
} from "../utils/network-data";

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [notes, setNotes] = useState([]);

  const onArchiveHandler = async (id) => {
    await archiveNote(id);
    navigate("/");
  };

  const onUnarchiveHandler = async (id) => {
    await unarchiveNote(id);
    navigate("/");
  };

  const onDeleteHandler = async (id) => {
    await deleteNote(id);
    navigate("/");
  };

  useEffect(() => {
    const fetchGetNotes = async () => {
      const { data } = await getNote(id);

      setNotes(data);
    };

    fetchGetNotes();
  }, [id]);

  return (
    <section className='detail-page'>
      <h3 className='detail-page__title'>{notes.title}</h3>
      <p className='detail-page__createdAt'>
        {showFormattedDate(notes.createdAt)}
      </p>
      <div className='detail-page__body'>{notes.body}</div>
      <DetailPageAction
        id={notes.id}
        title={notes.title}
        archived={notes.archived}
        archiveNote={onArchiveHandler}
        unArchiveNote={onUnarchiveHandler}
        deleteNote={onDeleteHandler}
      />
    </section>
  );
}

export default DetailPage;
