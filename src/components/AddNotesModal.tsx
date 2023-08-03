import { useRef } from "react";
import "./AddnotesModal.css";
import { Notetype } from "../services/types";
interface Props {
  isAddBoxOpen: boolean;
  onCancel: () => void;
  addnote: (Notes: Notetype) => void;
}

function AddNotesModal({ isAddBoxOpen, onCancel, addnote }: Props) {
  const refheading = useRef<HTMLInputElement | null>(null);
  const refContent = useRef<HTMLTextAreaElement | null>(null);
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!refContent.current?.value || !refheading.current?.value) {
      return;
    }

    addnote({
      id: Date.now(),
      content: refContent.current.value,
      Headline: refheading.current.value,
    });

    onCancel();
  };

  if (!isAddBoxOpen) return null;

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
