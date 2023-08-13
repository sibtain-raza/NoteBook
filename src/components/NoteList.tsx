import Note from "./Notes";
import { useParams } from "react-router-dom";
import "./NoteList.css";
import { Notetype } from "../types/type";
import AddNotesModal from "./AddNotesModal";
import { useState } from "react";

interface Props {
  notes: Notetype[];
  deleteNote: (id: number) => void;
  editNote: (id: number) => void;
  addNote: (Notes: Notetype) => void;
  starNote: (id: number) => void;
}

function NoteList({ notes, deleteNote, editNote, addNote, starNote }: Props) {
  const { tab } = useParams();
  const [isAddBoxOpen, setIsAddBoxOpen] = useState(false);
  const handleADD = () => {
    setIsAddBoxOpen(true);
  };

  const handleADDCancel = () => {
    setIsAddBoxOpen(false);
  };

  let renderNote;
  switch (tab) {
    case "new":
      renderNote = notes.filter((notes) => notes.isArchived == false);
      break;
    case "starred":
      renderNote = notes.filter(
        (notes) => notes.isArchived == false && notes.isStarred == true
      );
      break;
    case "archived":
      renderNote = notes.filter((notes) => notes.isArchived == true);
      break;
    default:
      renderNote = notes;
  }

  return (
    <div className="notes-list" key={"note-list"}>
      {tab == "new" && (
        <div className="add-notes" onClick={handleADD}>
          {isAddBoxOpen && (
            <AddNotesModal
              onCancel={handleADDCancel}
              addnote={(Note) => addNote(Note)}
            />
          )}
          <span>
            <h3>+ ADD NEW</h3>
          </span>
        </div>
      )}
      {renderNote.map((note) => (
        <Note
          key={note.id}
          Notes={note}
          deleteNote={(id) => deleteNote(id)}
          editNote={(id) => editNote(id)}
          starNote={(id) => starNote(id)}
        ></Note>
      ))}
    </div>
  );
}

export default NoteList;
