import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import NoteList from "./components/NoteList";
import { Notetype } from "./services/types";
import DisplayModal from "./components/DisplayModal";

function App() {
  const content = `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use ...`;
  const headline = `Notes of the the Computer cl...`;
  const dummynotes: Notetype[] = [
    { id: 1, content: content, Headline: headline },
    { id: 2, content: content, Headline: headline },
    { id: 3, content: content, Headline: headline },
    { id: 4, content: content, Headline: headline },
    { id: 5, content: content, Headline: headline },
    { id: 6, content: content, Headline: headline },
    { id: 7, content: content, Headline: headline },
  ];

  const [notes, setNotes] = useState([...dummynotes]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [boxNoteID, setBoxNoteID] = useState<number | null>(null);

  const handleClose = () => setIsModalOpen(false);
  const handleDelete = (id: number) => {
    setNotes(notes.filter((note) => note.id != id));
    setIsModalOpen(false);
  };

  const onClickedBox = (id: number) => {
    setIsModalOpen(true);
    setBoxNoteID(id);
  };

  return (
    <>
      <NavBar />
      <DisplayModal
        isOpen={isModalOpen}
        handleClose={handleClose}
        note={boxNoteID ? notes[boxNoteID] : notes[0]}
        onConfirm={(id) => handleDelete(id)}
      />
      <NoteList
        notes={notes}
        ondelete={(id) => handleDelete(id)}
        onedit={(id) => console.log(id)}
        onClickedBox={(id) => onClickedBox(id)}
      />
    </>
  );
}

export default App;
