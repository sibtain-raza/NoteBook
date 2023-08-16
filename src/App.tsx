import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import NoteList from "./components/NoteList";
import Tabs from "./components/Tabs";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/book/:bookId?/*" element={<Tabs />} />
      </Routes>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:bookId?/:tab?" element={<NoteList />} />
      </Routes>
    </>
  );
}

export default App;
