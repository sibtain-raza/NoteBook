import { Notetype } from "../types/type";
import "./Notes.css";
import deleteImage from "../assets/svg/delete-svgrepo-com.svg";
import editImage from "../assets/svg/edit-svgrepo-com.svg";
import unfilled_star from "../assets/svg/Vector_unfilled_star.svg";
import filledStar from "../assets/svg/primary_star_filled.svg";

import { useState } from "react";
import DisplayModal from "./DisplayModal";
import { useParams } from "react-router-dom";
interface Props {
  Notes: Notetype;
  deleteNote: (id: number) => void;
  editNote: (id: number) => void;
  starNote: (id: number) => void;
}

function Note({ Notes }: Props) {
  const { tab } = useParams();
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
      {Headline}
      {Content}
      <div className="bottom">
        {tab != "archived" && (
          <div>
            <button className="btnstar star">
              <img src={Notes.isStarred ? filledStar : unfilled_star} />
            </button>
            <button className="btn3 edit">
              <img src={editImage} />
            </button>
          </div>
        )}
        <button className="btn3 delete">
          <img src={deleteImage} />
        </button>
      </div>
    </div>
  );
}

export default Note;
