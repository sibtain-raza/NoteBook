import { booktype } from "../types/type";
import Book from "./Book";
import "./Home.css";
import { useBooks } from "./BookContext";
import AddBook from "./AddBook";
function Home() {
  const { books } = useBooks();
  return (
    <>
      <div className="book-list">
        <AddBook />
        {books.map(
          (book: booktype | undefined) =>
            book && <Book key={book.id} book={book} />
        )}
      </div>
    </>
  );
}

export default Home;
