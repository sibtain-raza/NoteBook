import Note from "./Notes";
import { useParams } from "react-router-dom";
import "./NoteList.css";
import { Notetype } from "../types/type";
import { useBooks } from "./BookContext";

interface Props {
  notes: Notetype[];
  deleteNote: (id: number) => void;
  editNote: (id: number) => void;
  addNote: (Notes: Notetype) => void;
  starNote: (id: number) => void;
}

function NoteList() {
  const { bookId } = useParams();
  const { books } = useBooks();
  const book = books.find(
    (book: { id: string | undefined }) => book.id === bookId
  );
  return (
    <div className="notes-list" key={"note-list"}>
      <div className="add-notes">
        <span>
          <h3>+ ADD NEW</h3>
        </span>
      </div>

      {book.notes.map(
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
              // deleteNote={(id) => deleteNote(id)}
              // editNote={(id) => editNote(id)}
              // starNote={(id) => starNote(id)}
            ></Note>
          )
      )}
    </div>
  );
}

export default NoteList;
