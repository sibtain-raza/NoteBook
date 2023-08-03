import Note from "./Notes";
import "./NoteList.css";
import { Notetype } from "../services/types";
import addImage from "../assets/add-circle-svgrepo-com.svg";

interface Props {
  notes: Notetype[];
  ondelete: (id: number) => void;
  onedit: (id: number) => void;
  onClickedBox: (id: number) => void;
}

function NoteList({ notes, ondelete, onedit, onClickedBox }: Props) {
  return (
    <div className="notes-list" key={"note-list"}>
      <div className="add-notes">
        <span>
          <img src={addImage} />
          <h3>Add Notes</h3>
        </span>
      </div>
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
