import { booktype } from "../types/type";

interface Props {
  book: booktype | undefined;
}

function Book({ book }: Props) {
  return (
    <>
      <h1>Book ID:{book?.id}</h1>
      <h2>Book Title : {book?.title}</h2>
      <ul>
        {book?.notes.map((note) => (
          <li key={note.id}>
            <h3>{note.Headline}</h3>
            <p>{note.content}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Book;
