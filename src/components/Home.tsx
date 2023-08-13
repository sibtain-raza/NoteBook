import { booktype } from "../types/type";
import Book from "./Book";
import "./Home.css";
import { useBooks } from "./BookContext";
function Home() {
  const { books } = useBooks();
  return (
    <>
      <div className="book-list">
        {books.map(
          (book: booktype | undefined) =>
            book && <Book key={book.id} book={book} />
        )}
      </div>
    </>
  );
}

export default Home;
