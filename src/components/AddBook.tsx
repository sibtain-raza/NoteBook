import { useState } from "react";
import { useBooks } from "./BookContext";
import { booktype } from "../types/type";
import "./AddBook.css";
function AddBook() {
  const { books, addBook } = useBooks();
  const [name, setName] = useState("");
  const handelAddBox = () => {
    const newBook: booktype = {
      id: `book${Date.now()}`,
      name: name,
      image_url: `/src/Photos/cover-photo${(books.length % 16) + 1}.jpg`,
      notes: [],
    };
    addBook(newBook);
    setName("");
  };
  return (
    <div className="add-book-container">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Book Name"
        className="add-book-input"
      />
      <br />
      <button onClick={handelAddBox} className="add-book-button">
        Add Book
      </button>
    </div>
  );
}

export default AddBook;
