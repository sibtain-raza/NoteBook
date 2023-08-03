import { useRef } from "react";
import "./AddnotesModal.css";
import { Notetype } from "../services/types";
interface Props {
  onCancel: () => void;
  addnote?: (Notes: Notetype) => void;
  editnote?: (Notes: Notetype) => void;
  editableNote?: Notetype | null;
}

function AddNotesModal({
  onCancel,
  addnote,
  editnote,
  editableNote = null,
}: Props) {
  const refheading = useRef<HTMLInputElement | null>(null);
  const refContent = useRef<HTMLTextAreaElement | null>(null);
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!refContent.current?.value || !refheading.current?.value) {
      return;
    }
    if (editableNote && editnote) {
      editnote({
        id: editableNote.id,
        content: refContent.current.value,
        Headline: refheading.current.value,
      });
    }
    if (addnote) {
      addnote({
        id: Date.now(),
        content: refContent.current.value,
        Headline: refheading.current.value,
      });
    }
    onCancel();
  };

  return (
    <div className="overlayadd">
      <div className="modaladd">
        <form
          onSubmit={(event) => {
            handleSubmit(event);
          }}
        >
          <label htmlFor="heading">Title</label>
          <br />
          <input
            ref={refheading}
            type="text"
            id="heading"
            name="heading"
            required
          />
          <br />

          <label htmlFor="content">Description</label>
          <br />
          <textarea ref={refContent} id="content" name="content" />
          <br />

          <div className="btn">
            <button
              type="button"
              className="btn1"
              onClick={(e) => {
                e.stopPropagation();
                onCancel();
              }}
            >
              Cancel
            </button>
            <button type="submit" className="btn2">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddNotesModal;
