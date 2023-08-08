import Note from "./Notes";
import "./NoteList.css";
import { Notetype } from "../types/types";
import AddNotesModal from "./AddNotesModal";
import { useState } from "react";

interface Props {
  notes: Notetype[];
  deleteNote: (id: number) => void;
  editNote: (id: number) => void;
  addNote: (Notes: Notetype) => void;
  starNote: (id: number) => void;
  tab: string;
}

function NoteList({
  notes,
  deleteNote,
  editNote,
  addNote,
  starNote,
  tab,
}: Props) {
  const [isAddBoxOpen, setIsAddBoxOpen] = useState(false);
  const handleADD = () => {
    setIsAddBoxOpen(true);
  };

  const handleADDCancel = () => {
    setIsAddBoxOpen(false);
  };

  let renderNote = notes;
  if (tab == "star") {
    renderNote = notes.filter((notes) => notes.isStarred == true);
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
          tab={tab}
        ></Note>
      ))}
    </div>
  );
}

export default NoteList;
