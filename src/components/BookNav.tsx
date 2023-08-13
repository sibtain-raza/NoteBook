import { Link, Outlet } from "react-router-dom";
import { useBooks } from "./BookContext";
import { booktype } from "../types/type";

function BookList() {
  const { books } = useBooks();
  console.log(books);
  return (
    <>
      <div style={{ display: "flex", gap: "10px" }}>
        {books.map(
          (book: booktype | undefined) =>
            book && (
              <Link key={book.id} to={`/book/${book.id}`}>
                BOOK {book.id}
              </Link>
            )
        )}
      </div>
      <Outlet />
    </>
  );
}

export default BookList;
