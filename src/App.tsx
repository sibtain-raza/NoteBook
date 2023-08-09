import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import NoteList from "./components/NoteList";
import { Notetype } from "./types/types";
import AddNotesModal from "./components/AddNotesModal";
import ConfirmDeleteModal from "./components/ConfirmDeleteModal";
import Tabs from "./components/Tabs";

type DelObj = {
  Note: Notetype | null;
  Isopen: boolean;
};

function App() {
  //ValueStore
  const storedNotes = JSON.parse(localStorage.getItem("Notes") || "[]");
  const [notes, setNotes] = useState<Notetype[]>(storedNotes);
  const [isEditBoxOpen, setIsEditBoxOpen] = useState(false);
  const [confirmBox, setConfirmBox] = useState<DelObj>({
    Isopen: false,
    Note: null,
  });
  const [editingNotes, setEditingNotes] = useState<Notetype | null>(null);
  const [tab, setTab] = useState("new");

  //handle function
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

  const markNote = (id: number | undefined, mark: string) => {
    const prevNotes = [...notes];
    const index = prevNotes.findIndex((note) => note.id === id);
    if (index != -1) {
      if (mark == "starnote") {
        prevNotes[index] = {
          ...prevNotes[index],
          isStarred: !prevNotes[index].isStarred,
        };
      }
      if (mark == "archive") {
        prevNotes[index] = {
          ...prevNotes[index],
          isArchived: !prevNotes[index].isArchived,
        };
      }
    }
    setNotes(prevNotes);
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
      <Tabs changeTab={(tab) => setTab(tab)} />
      <NoteList
        notes={notes}
        deleteNote={(id) => handleDeleteBox(id)}
        editNote={(id) => editTONote(id)}
        addNote={(Note) => addNotes(Note)}
        starNote={(id) => markNote(id, "starnote")}
        tab={tab}
      />
      {confirmBox.Isopen && (
        <ConfirmDeleteModal
          Note={confirmBox.Note}
          onDelete={(id) => handleDelete(id)}
          onclose={() => setConfirmBox({ ...confirmBox, Isopen: false })}
          archiveNote={(id) => markNote(id, "archive")}
          tab={tab}
          restore={(id) => markNote(id, "archive")}
        />
      )}
    </>
  );
}

export default App;
