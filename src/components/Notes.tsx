import { Notetype } from "../services/types";
import "./Notes.css";
import deleteImage from "../assets/delete-svgrepo-com.svg";
import editImage from "../assets/edit-svgrepo-com.svg";
interface Props {
  Notes: Notetype;
  ondelete: (id: number) => void;
  onedit: (id: number) => void;
  onClickedBox: (id: number) => void;
}

function Note({ Notes, ondelete, onedit, onClickedBox }: Props) {
  return (
    <div
      className="notes"
      key={Notes.id}
      onClick={() => onClickedBox(Notes.id)}
    >
      <p>{Notes.content}</p>
      <div className="bottom">
        <h5>{Notes.Headline}...</h5>
        <button
          className="btn1 edit"
          onClick={(event) => {
            event.stopPropagation();
            onedit(Notes.id);
          }}
        >
          <img src={editImage} />
        </button>
        <button
          className="btn1 delete"
          onClick={(event) => {
            event.stopPropagation();
            ondelete(Notes.id);
          }}
        >
          <img src={deleteImage} />
        </button>
      </div>
    </div>
  );
}

export default Note;
