import { Notetype } from "../services/types";
import "./DisplayModal.css";
import deleteImage from "../assets/delete-svgrepo-com.svg";
import closeImage from "../assets/close-svgrepo-com.svg";
import editImage from "../assets/edit-svgrepo-com.svg";
interface Props {
  note: Notetype;
  handleClose: () => void;
  deleteNote: (id: number) => void;
  editNote: (id: number) => void;
}

function DisplayModal({ note, handleClose, deleteNote, editNote }: Props) {
  return (
    <div className="overlay">
      <div className="modal">
        <div className="buttonclass">
          <button>
            <img
              src={editImage}
              onClick={(e) => {
                e.stopPropagation();
                editNote(note.id);
                handleClose();
              }}
            />
          </button>
          <button onClick={() => deleteNote(note.id)}>
            <img src={deleteImage} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleClose();
            }}
          >
            <img src={closeImage} />
          </button>
        </div>
        <h3>{note.Headline}</h3>
        <div className="content">
          <p>{note.content}</p>
        </div>
      </div>
    </div>
  );
}

export default DisplayModal;
