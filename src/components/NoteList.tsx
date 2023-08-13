import Note from "./Notes";
import { useParams } from "react-router-dom";
import "./NoteList.css";
import { useBooks } from "./BookContext";
import { useState } from "react";
import AddNotesModal from "./AddNotesModal";
import { Notetype } from "../types/type";

function NoteList() {
  const { tab, bookId } = useParams();
  const { books, setBooks } = useBooks();
  const [isAddBoxOpen, setIsAddBoxOpen] = useState(false);
  const book = books.find(
    (book: { id: string | undefined }) => book.id === bookId
  );
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

  const addNotes = (Note: Notetype) => {
    setBooks((books: any[]) => {
      return books.map((book) => {
        if (book.id == bookId) {
          return { ...book, notes: [...book.notes, Note] };
        }
        return book;
      });
    });
  };

  return (
    <div className="notes-list" key={"note-list"}>
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
              editNote={(id) => console.log(id)}
            ></Note>
          )
      )}
    </div>
  );
}

export default NoteList;
