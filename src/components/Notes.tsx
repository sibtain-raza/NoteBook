import { Notetype } from "../types/type";
import "./Notes.css";
import deleteImage from "../assets/svg/delete-svgrepo-com.svg";
import editImage from "../assets/svg/edit-svgrepo-com.svg";
import unfilled_star from "../assets/svg/Vector_unfilled_star.svg";
import filledStar from "../assets/svg/primary_star_filled.svg";

import { useState } from "react";
import DisplayModal from "./DisplayModal";
import { useParams } from "react-router-dom";
import { useBooks } from "./BookContext";
interface Props {
  Notes: Notetype | undefined;
  deleteNote: (id: number) => void;
  editNotes: (id: number) => void;
  starNote: (id: number) => void;
}

function Note({ Notes, editNotes, deleteNote }: Props) {
  const { tab, bookId } = useParams();
  const { editNote } = useBooks();
  const [showModal, setShowModal] = useState(false);
  if (!Notes) {
    return null;
  }
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
          handleClose={() => {
            setShowModal(false);
          }}
          deleteNote={() => {
            console.log("deleted");
          }}
          editNotes={(id) => {
            console.log(id);
            editNotes(id);
          }}
        />
      )}

      {Headline}
      {Content}
      <div className="bottom">
        {tab != "archived" && (
          <div>
            <button
              className="btnstar star"
              onClick={(e) => {
                e.stopPropagation();
                editNote(bookId, Notes.id, { isStarred: !Notes.isStarred });
              }}
            >
              <img src={Notes.isStarred ? filledStar : unfilled_star} />
            </button>
            <button
              className="btn3 edit"
              onClick={(e) => {
                e.stopPropagation();
                editNotes(Notes.id);
              }}
            >
              <img src={editImage} />
            </button>
          </div>
        )}
        <button
          className="btn3 delete"
          onClick={(e) => {
            e.stopPropagation();
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
