import React from "react";
import PropTypes from "prop-types";
import {
  RiInboxArchiveFill,
  RiInboxUnarchiveFill,
  RiDeleteBin6Fill,
} from "react-icons/ri";
import Swal from "sweetalert2";

function DetailPageAction({
  id,
  title,
  archived,
  archiveNote,
  unArchiveNote,
  deleteNote,
}) {
  const onDeleteNoteHandler = () => {
    Swal.fire({
      title: `Hapus catatan "${title}"?`,
      text: "Apakah kamu yakin?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya",
      cancelButtonText: "Tidak",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteNote(id);
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Catatan kamu "${title}" sudah dihapus`,
          showConfirmButton: false,
          timer: 1000,
        });
      }
    });
  };

  const onArchiveNoteHandler = () => {
    archiveNote(id);
  };

  const onUnarchiveNoteHandler = () => {
    unArchiveNote(id);
  };

  return (
    <div className='detail-page__action'>
      {archived ? (
        <button
          className='action'
          type='button'
          title='Aktifkan'
          onClick={onUnarchiveNoteHandler}
        >
          <RiInboxUnarchiveFill />
        </button>
      ) : (
        <button
          className='action'
          type='button'
          title='Arsipkan'
          onClick={onArchiveNoteHandler}
        >
          <RiInboxArchiveFill />
        </button>
      )}

      <button
        className='action'
        type='button'
        title='Hapus'
        onClick={onDeleteNoteHandler}
      >
        <RiDeleteBin6Fill />
      </button>
    </div>
  );
}

DetailPageAction.proptype = {
  id: PropTypes.string,
  title: PropTypes.string,
  deleteNote: PropTypes.func,
  archiveNote: PropTypes.func,
  unArchiveNote: PropTypes.func,
  archived: PropTypes.bool,
};

export default DetailPageAction;
