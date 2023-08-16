import Note from "./Notes";
import { useParams } from "react-router-dom";
import "./NoteList.css";
import { useBooks } from "./BookContext";
import { useState } from "react";
import AddNotesModal from "./AddNotesModal";
import { Notetype } from "../types/type";
import ConfirmDeleteModal from "./ConfirmDeleteModal";

type DelObj = {
  Note: Notetype | null;
  IsOpen: Boolean;
};

function NoteList() {
  const { tab, bookId } = useParams();
  const { addNote, findNote, editNote, deleteNote } = useBooks();
  const [isAddBoxOpen, setIsAddBoxOpen] = useState(false);
  const [isEditBoxOpen, setIsEditBoxOpen] = useState(false);
  const [editableNote, setEditableNote] = useState(null);
  const [confirmBox, setConfrimBox] = useState<DelObj>({
    IsOpen: false,
    Note: null,
  });

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
      renderNotes = Notes.filter(
        (note: { isArchived: boolean }) => note.isArchived == false
      );
  }

  const editToNotes = (id: number) => {
    setIsEditBoxOpen(true);
    const { note } = findNote(bookId, id);
    if (note) setEditableNote(note);
  };

  const addNotes = (Note: Notetype) => {
    addNote(bookId, Note);
  };

  const editNotes = (Note: Notetype) => {
    editNote(bookId, Note.id, Note);
    setEditableNote(null);
  };

  const handleDeleteBox = (id: number) => {
    const DelNotes = Notes.find((note: { id: number }) => note.id === id);
    if (DelNotes) {
      setConfrimBox({ Note: DelNotes, IsOpen: true });
    }
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
      {confirmBox.IsOpen && (
        <ConfirmDeleteModal
          Note={confirmBox.Note}
          onDeleteNote={(id) => {
            deleteNote(bookId, id);
          }}
          onclose={() => setConfrimBox({ ...confirmBox, IsOpen: false })}
          archiveNote={(id) => {
            editNote(bookId, id, { isArchived: true });
          }}
          restore={(id) => {
            editNote(bookId, id, { isArchived: false });
          }}
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
          content: string;
          Headline: string;
          isArchived?: boolean | undefined;
          isStarred?: boolean | undefined;
        }) =>
          note && (
            <Note
              key={note.id}
              Notes={note}
              editNotes={(id) => editToNotes(id)}
              deleteNote={(id) => handleDeleteBox(id)}
            ></Note>
          )
      )}
    </div>
  );
}

export default NoteList;
