import Notes from "./Notes";
import "./NoteList.css";
import { Notetype } from "../services/types";
function NoteList() {
  const content = `"Elevate your process writing to new heights with the assistance of our
    AI Text Generator. Scribe AI offers grammar and style suggestions,
    helping you refine your work and ensure a polished final product. Let AI
    be your writing partner, making your words shine. 3. Build & share
    documentation — fast Cut your process documentation ."`;
  const headline = "Elevate your process writing";
  const notes: Notetype[] = [
    { id: 1, content: content, Headline: headline },
    { id: 2, content: content, Headline: headline },
    { id: 3, content: content, Headline: headline },
    { id: 4, content: content, Headline: headline },
    { id: 5, content: content, Headline: headline },
    { id: 6, content: content, Headline: headline },
    { id: 7, content: content, Headline: headline },
  ];
  return (
    <div className="notes-list" key={"note-list"}>
      {notes.map((note) => (
        <Notes
          key={note.id}
          id={note.id}
          content={note.content}
          Headline={note.Headline}
        ></Notes>
      ))}
    </div>
  );
}

export default NoteList;
