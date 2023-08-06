import { Notetype } from "../services/types";
import "./Notes.css";
import deleteImage from "../assets/delete-svgrepo-com.svg";
import editImage from "../assets/edit-svgrepo-com.svg";
import { useState } from "react";
import DisplayModal from "./DisplayModal";
interface Props {
  Notes: Notetype;
  deleteNote: (id: number) => void;
  editNote: (id: number) => void;
}

function Note({ Notes, deleteNote, editNote }: Props) {
  const [showModal, setShowModal] = useState(false);
  const Headline =
    Notes.Headline.length < 40 ? (
      <h5>{Notes.Headline}</h5>
    ) : (
      <h5>{Notes.Headline.slice(0, 40)}...</h5>
    );

  const Content =
    Notes.content.length < 330 ? (
      <p>{Notes.content}</p>
    ) : (
      <p>{Notes.content.slice(0, 330)}....</p>
    );
  return (
    <div className="notes" key={Notes.id} onClick={() => setShowModal(true)}>
      {showModal && (
        <DisplayModal
          note={Notes}
          handleClose={() => setShowModal(false)}
          deleteNote={deleteNote}
          editNote={(id) => editNote(id)}
        />
      )}
      {Headline}
      {Content}
      <div className="bottom">
        <button
          className="btn3 edit"
          onClick={(event) => {
            event.stopPropagation();
            editNote(Notes.id);
          }}
        >
          <img src={editImage} />
        </button>
        <button
          className="btn3 delete"
          onClick={(event) => {
            event.stopPropagation();
            deleteNote(Notes.id);
          }}
        >
          <img src={deleteImage} />
        </button>
      </div>
    </div>
  );
}

export default Note;
