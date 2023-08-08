import { Notetype } from "../types/types";
import "./Notes.css";
import deleteImage from "../assets/svg/delete-svgrepo-com.svg";
import editImage from "../assets/svg/edit-svgrepo-com.svg";
import unfilled_star from "../assets/svg/Vector_unfilled_star.svg";
import filledStar from "../assets/svg/primary_star_filled.svg";

import { useState } from "react";
import DisplayModal from "./DisplayModal";
interface Props {
  Notes: Notetype;
  deleteNote: (id: number) => void;
  editNote: (id: number) => void;
  starNote: (id: number) => void;
  tab: string;
}

function Note({ Notes, deleteNote, editNote, starNote, tab }: Props) {
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
          tab={tab}
        />
      )}
      {Headline}
      {Content}
      <div className="bottom">
        {tab != "archive" && (
          <div>
            <button
              className="btnstar star"
              onClick={(e) => {
                e.stopPropagation();
                starNote(Notes.id);
              }}
            >
              <img src={Notes.isStarred ? filledStar : unfilled_star} />
            </button>
            <button
              className="btn3 edit"
              onClick={(event) => {
                event.stopPropagation();
                editNote(Notes.id);
              }}
            >
              <img src={editImage} />
            </button>
          </div>
        )}
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
