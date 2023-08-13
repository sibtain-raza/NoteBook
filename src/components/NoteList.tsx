import Note from "./Notes";
import { useParams } from "react-router-dom";
import "./NoteList.css";
import { useBooks } from "./BookContext";
import { useState } from "react";
import AddNotesModal from "./AddNotesModal";
import { Notetype } from "../types/type";

function NoteList() {
  const { tab, bookId } = useParams();
  const { books, addNote, findNote, editNote } = useBooks();
  const [isAddBoxOpen, setIsAddBoxOpen] = useState(false);
  const [isEditBoxOpen, setIsEditBoxOpen] = useState(false);
  const [editableNote, setEditableNote] = useState(null);

  const { book } = findNote(bookId);

  const Notes = book.notes;
  let renderNotes;
  switch (tab) {
    case "new":
      renderNotes = Notes.filter(
        (note: { isArchived: boolean }) => note.isArchived == false
      );
      break;
    case "starred":
      renderNotes = Notes.filter(
        (note: { isArchived: boolean; isStarred: boolean }) =>
          note.isArchived == false && note.isStarred == true
      );
      break;
    case "archived":
      renderNotes = Notes.filter(
        (notes: { isArchived: boolean }) => notes.isArchived == true
      );
      break;
    default:
      renderNotes = Notes;
  }

  const editToNotes = (id: number) => {
    setIsEditBoxOpen(true);
    const { book, note } = findNote(bookId, id);
    if (note) setEditableNote(note);
  };

  const addNotes = (Note: Notetype) => {
    addNote(bookId, Note);
  };

  const editNotes = (Note: Notetype) => {
    editNote(bookId, Note.id, Note);
    setEditableNote(null);
  };

  return (
    <div className="notes-list" key={"note-list"}>
      {isEditBoxOpen && (
        <AddNotesModal
          onCancel={() => setIsEditBoxOpen(false)}
          editableNote={editableNote}
          editnote={editNotes}
        />
      )}
      <div
        className="add-notes"
        onClick={() => {
          setIsAddBoxOpen(true);
        }}
      >
        {isAddBoxOpen && (
          <AddNotesModal
            onCancel={() => {
              setIsAddBoxOpen(false);
            }}
            addnote={(Note) => addNotes(Note)}
          />
        )}
        <span>
          <h3>+ ADD NEW</h3>
        </span>
      </div>

      {renderNotes.map(
        (note: {
          id: any;
          content?: string;
          Headline?: string;
          isArchived?: boolean | undefined;
          isStarred?: boolean | undefined;
        }) =>
          note && (
            <Note
              key={note.id}
              Notes={note}
              editNotes={(id) => editToNotes(id)}
            ></Note>
          )
      )}
    </div>
  );
}

export default NoteList;
