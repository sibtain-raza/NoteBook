import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import NoteList from "./components/NoteList";
import { Notetype } from "./services/types";
import DisplayModal from "./components/DisplayModal";

function App() {
  const content = `Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur sollicitudin, nisl a vehicula egestas, nisi eros faucibus mi, lacinia volutpat enim nunc quis metus. Suspendisse potenti. Phasellus at nulla sit amet quam tempor blandit id ut diam. Fusce dapibus, arcu eget eleifend dignissim, justo tortor vulputate orci, ac auctor odio nisi ut felis. In maximus consectetur blandit. Donec justo eros, fringilla ut tincidunt nec, placerat id velit. Pellentesque rutrum, nisl at condimentum ultrices, purus nibh ornare lorem, vel pharetra tortor elit id velit. Nulla volutpat, ligula eu luctus pretium, enim tellus condimentum nisi, non commodo nulla mauris eget nunc. Aliquam sapien felis, faucibus viverra hendrerit ac, scelerisque nec dolor. Proin quis mi eget ligula finibus ultricies sit amet ut turpis. Nullam bibendum ligula finibus neque eleifend faucibus. Pellentesque quis elementum ipsum. Donec vel felis ligula. Donec quis dui purus. Morbi sit amet vestibulum massa.
  Nullam pulvinar erat eget enim tristique tincidunt quis id elit. Cras convallis urna massa, et viverra sapien ullamcorper nec. Morbi id imperdiet lacus, vitae finibus nulla. Vivamus euismod tristique leo, vel vulputate diam iaculis sit amet. Maecenas tempus turpis suscipit, sollicitudin enim in, tempor odio. Donec pellentesque, nibh in imperdiet tincidunt, risus eros pulvinar felis, non tincidunt eros sapien sit amet diam. Pellentesque varius arcu turpis, eu fringilla libero iaculis ac. Duis eget dui et sapien finibus suscipit vitae et orci. Maecenas quam ex, efficitur ac aliquam ut, dignissim eu libero. Phasellus odio ante, commodo vel risus non, dapibus consectetur lacus. Mauris congue blandit molestie. In a ante a nulla scelerisque auctor. Praesent mi velit, euismod finibus dictum convallis, vulputate id orci. Curabitur ut ipsum metus. Morbi ultrices erat ex, ac posuere ligula vestibulum eu. Mauris varius nulla felis, varius ornare est lobortis et.`;
  const headline = `Vestibulum ante ipsum primis in faucibus`;
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
