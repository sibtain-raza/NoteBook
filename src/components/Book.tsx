import { Link, Outlet } from "react-router-dom";
import { booktype } from "../types/type";
import "./Book.css";
interface Props {
  book: booktype | undefined;
}

function Book({ book }: Props) {
  const randomImage = Math.floor(Math.random() * 17 + 1);
  return (
    <>
      <Link to={`/book/${book?.id}`}>
        <div
          className="book"
          style={{
            backgroundImage: `url(/src/Photos/cover-photo${randomImage}.jpg)`,
          }}
        >
          <h2>{book?.name}</h2>
        </div>
      </Link>
      <Outlet />
    </>
  );
}

export default Book;
