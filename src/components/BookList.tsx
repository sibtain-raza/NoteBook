import { booktype } from "../types/type";
import { useParams } from "react-router-dom";
import Book from "./Book";

interface Props {
  books: booktype[];
}

function BookList({ books }: Props) {
  const { id } = useParams();
  const DisplayBook = books.find((book) => id && book.id == +id);
  return (
    <>
      <Book book={DisplayBook} />
    </>
  );
}

export default BookList;
