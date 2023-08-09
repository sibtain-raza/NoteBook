import "./ConfirmDeleteModal.css";
import closeImage from "../assets/svg/close-svgrepo-com.svg";
import { Notetype } from "../types/types";

interface Props {
  onclose: () => void;
  Note: Notetype | null;
  onDelete: (id: number | undefined) => void;
  archiveNote: (id: number | undefined) => void;
  tab: string;
  restore: (id: number | undefined) => void;
}

function ConfirmDeleteModal({
  onclose,
  Note,
  onDelete,
  archiveNote,
  tab,
  restore,
}: Props) {
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
        {tab != "archive" && (
          <div className="btnClass">
            <button
              className="archiveBtn"
              onClick={(e) => {
                onclose();
                e.stopPropagation();
                archiveNote(Note?.id);
              }}
            >
              ARCHIVE
            </button>
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
        )}
        {tab == "archive" && (
          <div className="btnClass">
            <button
              className="archiveBtn"
              onClick={(e) => {
                onclose();
                e.stopPropagation();
                restore(Note?.id);
              }}
            >
              RESTORE
            </button>
            <button
              className="deleteBtn"
              onClick={() => {
                onDelete(Note?.id);
                onclose();
              }}
            >
              Confirm
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ConfirmDeleteModal;
