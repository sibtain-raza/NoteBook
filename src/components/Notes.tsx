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
  const Headline =
    Notes.Headline.length < 28 ? (
      <h5>{Notes.Headline}</h5>
    ) : (
      <h5>{Notes.Headline.slice(0, 28)}...</h5>
    );

  const Content =
    Notes.content.length < 175 ? (
      <p>{Notes.content}</p>
    ) : (
      <p>{Notes.content.slice(0, 175)}....</p>
    );
  return (
    <div
      className="notes"
      key={Notes.id}
      onClick={() => onClickedBox(Notes.id)}
    >
      {Headline}
      <p>{Content}</p>
      <div className="bottom">
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
