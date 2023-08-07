import { useEffect, useState } from "react";
import "./AddnotesModal.css";
import { Notetype } from "../types/types";
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
  const [content, setContent] = useState("");
  const [heading, setHeading] = useState("");

  useEffect(() => {
    if (editableNote) {
      setContent(editableNote.content);
      setHeading(editableNote.Headline);
    }
  }, [editableNote]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!content || !heading) {
      return;
    }
    if (editableNote && editnote) {
      editnote({
        id: editableNote.id,
        content: content,
        Headline: heading,
      });
    }
    if (addnote) {
      addnote({
        id: Date.now(),
        content: content,
        Headline: heading,
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
            onChange={(e) => setHeading(e.target.value)}
            value={heading}
            type="text"
            id="heading"
            name="heading"
            required
          />
          <br />

          <div className="description">
            <label htmlFor="content">Description</label>
            <br />
            <textarea
              onChange={(e) => setContent(e.target.value)}
              id="content"
              name="content"
              value={content}
            />
            <br />
          </div>

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
              SAVE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddNotesModal;
