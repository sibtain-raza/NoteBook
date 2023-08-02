import { Notetype } from "../services/types";
import "./DisplayModal.css";
import deleteImage from "../assets/delete-svgrepo-com.svg";
import closeImage from "../assets/close-svgrepo-com.svg";
interface Props {
  note: Notetype;
  isOpen: boolean;
  handleClose: (id: number) => void;
  onConfirm: (id: number) => void;
}

function DisplayModal({ note, isOpen, handleClose, onConfirm }: Props) {
  if (!isOpen) return null;

  return (
    <div className="overlay">
      <div className="modal">
        <button onClick={() => handleClose(note.id)}>
          <img src={closeImage} />
        </button>
        <button onClick={() => onConfirm(note.id)}>
          <img src={deleteImage} />
        </button>
        <h3>{note.Headline}</h3>
        <p>{note.content}</p>
      </div>
    </div>
  );
}

export default DisplayModal;
