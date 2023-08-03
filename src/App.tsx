import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import NoteList from "./components/NoteList";
import { Notetype } from "./services/types";
import AddNotesModal from "./components/AddNotesModal";

function App() {
  const [notes, setNotes] = useState<Notetype[]>([]);

  const [isEditBoxOpen, setIsEditBoxOpen] = useState(false);
  const [editingNotes, setEditingNotes] = useState<Notetype | null>(null);

  const handleDelete = (id: number) => {
    setNotes(notes.filter((note) => note.id != id));
  };

  const editTONote = (id: number) => {
    setIsEditBoxOpen(true);
    const notetobeEdited = notes.filter((note) => note.id === id);
    if (notetobeEdited) setEditingNotes(notetobeEdited[0]);
  };

  const editNote = (Note: Notetype) => {
    setNotes(notes.map((note) => (Note.id == note.id ? Note : note)));
    setEditingNotes(null);
  };

  const addNotes = (Note: Notetype) => {
    console.log(Note);
    console.log(notes);
    setNotes([...notes, Note]);
  };

  return (
    <>
      <NavBar />
      {isEditBoxOpen && (
        <AddNotesModal
          onCancel={() => setIsEditBoxOpen(false)}
          editableNote={editingNotes}
          editnote={editNote}
        />
      )}
      <NoteList
        notes={notes}
        deleteNote={(id) => handleDelete(id)}
        editNote={(id) => editTONote(id)}
        addNote={(Note) => addNotes(Note)}
      />
    </>
  );
}

export default App;
