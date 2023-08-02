import Note from "./Notes";
import "./NoteList.css";
import { Notetype } from "../services/types";

interface Props {
  notes: Notetype[];
  ondelete: (id: number) => void;
  onedit: (id: number) => void;
  onClickedBox: (id: number) => void;
}

function NoteList({ notes, ondelete, onedit, onClickedBox }: Props) {
  return (
    <div className="notes-list" key={"note-list"}>
      {notes.map((note) => (
        <Note
          key={note.id}
          Notes={note}
          ondelete={(id) => ondelete(id)}
          onedit={(id) => onedit(id)}
          onClickedBox={(id) => onClickedBox(id)}
        ></Note>
      ))}
    </div>
  );
}

export default NoteList;
