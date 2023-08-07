import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import NoteList from "./components/NoteList";
import { Notetype } from "./types/types";
import AddNotesModal from "./components/AddNotesModal";
import ConfirmDeleteModal from "./components/ConfirmDeleteModal";

type DelObj = {
  Note: Notetype | null;
  Isopen: boolean;
};

function App() {
  const storedNotes = JSON.parse(localStorage.getItem("Notes") || "[]");

  const [notes, setNotes] = useState<Notetype[]>(storedNotes);

  const [isEditBoxOpen, setIsEditBoxOpen] = useState(false);
  const [confirmBox, setConfirmBox] = useState<DelObj>({
    Isopen: false,
    Note: null,
  });
  const [editingNotes, setEditingNotes] = useState<Notetype | null>(null);

  const handleDeleteBox = (id: number) => {
    const DelNotes = notes.filter((note) => note.id == id)[0];
    if (DelNotes) {
      setConfirmBox({ Note: DelNotes, Isopen: true });
    }
  };

  const handleDelete = (id: number | undefined) => {
    if (id) {
      setNotes(notes.filter((note) => note.id != id));
    }
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

  useEffect(() => {
    localStorage.setItem("Notes", JSON.stringify(notes));
  }, [notes]);

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
        deleteNote={(id) => handleDeleteBox(id)}
        editNote={(id) => editTONote(id)}
        addNote={(Note) => addNotes(Note)}
      />
      {confirmBox.Isopen && (
        <ConfirmDeleteModal
          Note={confirmBox.Note}
          onDelete={(id) => handleDelete(id)}
          onclose={() => setConfirmBox({ ...confirmBox, Isopen: false })}
        />
      )}
    </>
  );
}

export default App;
