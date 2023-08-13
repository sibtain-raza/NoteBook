import { booktype } from "../types/type";
import { Link, Outlet } from "react-router-dom";

interface Props {
  books: booktype[];
}

function BookList({ books }: Props) {
  return (
    <>
      <div style={{ display: "flex", gap: "10px" }}>
        {books.map((book) => (
          <Link key={book.id} to={`/book/${book.id}`}>
            BOOK {book.id}
          </Link>
        ))}
      </div>
      <Outlet />
    </>
  );
}

export default BookList;
