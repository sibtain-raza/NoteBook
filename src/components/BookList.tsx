import { booktype } from "../types/type";
import { useParams } from "react-router-dom";
import Book from "./Book";
import { useBooks } from "./BookContext";

function BookList() {
  const { books } = useBooks();
  const { id } = useParams();
  const DisplayBook = books.find(
    (book: booktype | undefined) => id && book && book.id == id
  );
  return (
    <>
      <Book book={DisplayBook} />
    </>
  );
}

export default BookList;
