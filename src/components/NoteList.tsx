import Note from "./Notes";
import "./NoteList.css";
import { Notetype } from "../types/types";
import addImage from "../assets/add-circle-svgrepo-com.svg";
import AddNotesModal from "./AddNotesModal";
import { useState } from "react";

interface Props {
  notes: Notetype[];
  deleteNote: (id: number) => void;
  editNote: (id: number) => void;
  addNote: (Notes: Notetype) => void;
}

function NoteList({ notes, deleteNote, editNote, addNote }: Props) {
  const [isAddBoxOpen, setIsAddBoxOpen] = useState(false);
  const handleADD = () => {
    setIsAddBoxOpen(true);
  };

  const handleADDCancel = () => {
    setIsAddBoxOpen(false);
  };
  return (
    <div className="notes-list" key={"note-list"}>
      <div className="add-notes" onClick={handleADD}>
        {isAddBoxOpen && (
          <AddNotesModal
            onCancel={handleADDCancel}
            addnote={(Note) => addNote(Note)}
          />
        )}
        <span>
          <img src={addImage} />
          <h3>Add Notes</h3>
        </span>
      </div>
      {notes.map((note) => (
        <Note
          key={note.id}
          Notes={note}
          deleteNote={(id) => deleteNote(id)}
          editNote={(id) => editNote(id)}
        ></Note>
      ))}
    </div>
  );
}

export default NoteList;
