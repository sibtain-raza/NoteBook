import { Notetype } from "../types/types";
import "./DisplayModal.css";
import deleteImage from "../assets/svg/delete-svgrepo-com.svg";
import closeImage from "../assets/svg/close-svgrepo-com.svg";
import editImage from "../assets/svg/edit-svgrepo-com.svg";
interface Props {
  note: Notetype;
  handleClose: () => void;
  deleteNote: (id: number) => void;
  editNote: (id: number) => void;
  tab: string;
}

function DisplayModal({ note, handleClose, deleteNote, editNote, tab }: Props) {
  return (
    <div className="overlay">
      <div className="modal">
        <div className="buttonclass">
          {tab != "archived" && (
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
          )}
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
        <div className="headline">
          <h3>{note.Headline}</h3>
        </div>
        <div className="content">
          <p>{note.content}</p>
        </div>
      </div>
    </div>
  );
}

export default DisplayModal;
