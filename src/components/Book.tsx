import { booktype } from "../types/type";
import "./Book.css";
interface Props {
  book: booktype | undefined;
}

function Book({ book }: Props) {
  const randomImage = Math.floor(Math.random() * 18 + 1);
  return (
    <>
      <div
        className="book"
        style={{
          backgroundImage: `url(/src/Photos/cover-photo${randomImage}.jpg)`,
        }}
      >
        <h2>{book?.name}</h2>
      </div>
    </>
  );
}

export default Book;
