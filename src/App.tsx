import { Link, Route, Routes } from "react-router-dom";
import Book from "./components/Book";
import NavBar from "./components/NavBar";
import { booktype } from "./types/type";
import BookList from "./components/BookList";
import BookNav from "./components/BookNav";
import Home from "./components/Home";
function App() {
  const content =
    "If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough, the next logical step is to find a random paragraph. We created the Random Paragraph Generator with you in mind. The process is quite simple. Choose the number of random paragraphs you'd like to see and click the button. Your chosen number of paragraphs will instantly appear.";
  const Books: booktype[] = [
    {
      id: 1,
      title: "book 1",
      notes: [
        { id: 1, Headline: "note1", content: content },
        { id: 2, Headline: "note2", content: content },
      ],
    },
    {
      id: 2,
      title: "book 2",
      notes: [
        { id: 1, Headline: "note1", content: content },
        { id: 2, Headline: "note2", content: content },
      ],
    },
  ];
  return (
    <>
      <NavBar />
      <nav>
        <Routes>
          <Route path="/" element={<Link to={"/book"}>Book</Link>} />
          <Route path="/book" element={<BookNav books={Books} />} />
        </Routes>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<BookList books={Books} />} />
      </Routes>
    </>
  );
}

export default App;
