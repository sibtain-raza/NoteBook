import { useParams } from "react-router-dom";
import "./ConfirmDeleteModal.css";
import closeImage from "../assets/svg/close-svgrepo-com.svg";
import { Notetype, booktype } from "../types/type";

interface Props {
  onclose: () => void;
  Note?: Notetype | null;
  book?: booktype | null;
  onDeleteNote?: (id: number | undefined) => void;
  onDeleteBook?: (id: string | undefined) => void;
  archiveNote?: (id: number | undefined) => void;
  restore?: (id: number | undefined) => void;
}

function ConfirmDeleteModal({
  onclose,
  book,
  Note,
  onDeleteBook,
  onDeleteNote,
  archiveNote,
  restore,
}: Props) {
  const { tab } = useParams();
  const isNote = Note !== undefined;
  const isBook = book !== undefined;
  const handleDelete = () => {
    if (isNote) {
      onDeleteNote?.(Note?.id);
    } else if (isBook) {
      onDeleteBook?.(book?.id);
    }
    onclose();
  };
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
        <p>Are you sure You want to Delete the {isNote ? "Note" : "Book"}?</p>
        <h5>"{isNote ? Note?.Headline : book?.name}"</h5>
        {tab != "archived" && (
          <div className="btnClass">
            {isNote && (
              <button
                className="archiveBtn"
                onClick={(e) => {
                  onclose();
                  e.stopPropagation();
                  archiveNote?.(Note?.id);
                }}
              >
                ARCHIVE
              </button>
            )}
            <button
              className="deleteBtn"
              onClick={() => {
                handleDelete();
                console.log(Note?.id);
              }}
            >
              DELETE
            </button>
          </div>
        )}
        {tab == "archived" && isNote && (
          <div className="btnClass">
            <button
              className="archiveBtn"
              onClick={(e) => {
                onclose();
                e.stopPropagation();
                restore?.(Note?.id);
              }}
            >
              RESTORE
            </button>
            <button
              className="deleteBtn"
              onClick={() => {
                handleDelete();
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
