import { Link, Outlet } from "react-router-dom";
import { booktype } from "../types/type";
import "./Book.css";
import deleteImage from "../assets/svg/delete-svgrepo-com.svg";
import { useBooks } from "./BookContext";
import { useState } from "react";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
interface Props {
  book: booktype | undefined;
}

type DelObj = {
  Book: booktype | null;
  Isopen: boolean;
};

function Book({ book }: Props) {
  const { deleteBook } = useBooks();
  const [confirmBox, setConfirmBox] = useState<DelObj>({
    Book: null,
    Isopen: false,
  });
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
            if (book) {
              setConfirmBox({ Book: book, Isopen: true });
            }
          }}
        >
          <img src={deleteImage} />
        </button>
      </div>
      {confirmBox.Isopen && (
        <ConfirmDeleteModal
          onclose={() => setConfirmBox({ ...confirmBox, Isopen: false })}
          book={confirmBox.Book}
          onDeleteBook={(bookId) => {
            deleteBook(bookId);
          }}
        />
      )}

      <Outlet />
    </>
  );
}

export default Book;
