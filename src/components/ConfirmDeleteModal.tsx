import "./ConfirmDeleteModal.css";
import closeImage from "../assets/close-svgrepo-com.svg";
import { Notetype } from "../types/types";

interface Props {
  onclose: () => void;
  Note: Notetype | null;
  onDelete: (id: number | undefined) => void;
}

function ConfirmDeleteModal({ onclose, Note, onDelete }: Props) {
  return (
    <div className="overlayconfirm">
      <div className="modalconfirm">
        <img
          src={closeImage}
          onClick={(e) => {
            onclose();
            e.stopPropagation();
          }}
        />
        <p>Are you sure You want to Delete the Note ?</p>
        <h5>"{Note?.Headline}"</h5>
        <div className="btnClass">
          <button className="archiveBtn">ARCHIVE</button>
          <button
            className="deleteBtn"
            onClick={() => {
              onDelete(Note?.id);
              onclose();
            }}
          >
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDeleteModal;
