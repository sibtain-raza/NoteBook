import { Link, Outlet } from "react-router-dom";
import { booktype } from "../types/type";
import "./Book.css";
import deleteImage from "../assets/svg/delete-svgrepo-com.svg";
import { useBooks } from "./BookContext";
interface Props {
  book: booktype | undefined;
}

function Book({ book }: Props) {
  const { deleteBook } = useBooks();
  const randomImage = Math.floor(Math.random() * 16 + 1);
  const image_url = book?.image_url
    ? book.image_url
    : `src/Photos/cover-photo${randomImage}.jpg`;

  return (
    <>
      <div
        className="book"
        style={{
          backgroundImage: `url(${image_url})`,
        }}
      >
        <Link to={`/book/${book?.id}`}>
          <div className="book-link">
            <h2>{book?.name}</h2>
          </div>
        </Link>
        <button
          className="book-delete"
          onClick={(e) => {
            e.stopPropagation();
            deleteBook(book?.id);
          }}
        >
          <img src={deleteImage} />
        </button>
      </div>

      <Outlet />
    </>
  );
}

export default Book;
