import { Link, Outlet } from "react-router-dom";
import { booktype } from "../types/type";
import "./Book.css";
import deleteImage from "../assets/svg/delete-svgrepo-com.svg";
interface Props {
  book: booktype | undefined;
}

function Book({ book }: Props) {
  const randomImage = Math.floor(Math.random() * 16 + 1);
  const image_url = book?.image_url
    ? book.image_url
    : `src/Photos/cover-photo${randomImage}.jpg`;

  return (
    <>
      <Link to={`/book/${book?.id}`}>
        <div
          className="book"
          style={{
            backgroundImage: `url(${image_url})`,
          }}
        >
          <h2>{book?.name}</h2>
          <button className="book-delete">
            <img src={deleteImage} />
          </button>
        </div>
      </Link>

      <Outlet />
    </>
  );
}

export default Book;
