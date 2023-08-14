import { createContext, useState, useContext, useEffect } from "react";
import { Notetype, booktype } from "../types/type";

export const BookContext = createContext<any>([]);

function BookProvider({ children }: { children: any }) {
  //dummy Book

  //DUMMY Book
  const savedBook = localStorage.getItem("books");
  const ParseBook = savedBook ? JSON.parse(savedBook) : [];
  const [books, setBooks] = useState<booktype[]>(ParseBook);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const addNote = (bookId: string, newNote: Notetype) => {
    setBooks((books) =>
      books.map((book) =>
        book.id === bookId ? { ...book, notes: [...book.notes, newNote] } : book
      )
    );
  };
  const editNote = (
    bookId: string,
    noteId: number,
    updatedFields: Partial<Notetype>
  ) => {
    setBooks((books) => {
      return books.map((book) => {
        if (book.id === bookId) {
          return {
            ...book,
            notes: book.notes.map((note) =>
              note.id === noteId ? { ...note, ...updatedFields } : note
            ),
          };
        }
        return book;
      });
    });
  };

  const deleteNote = (bookId: string, noteId: number) => {
    setBooks((books) =>
      books.map((book) => {
        if (book.id === bookId) {
          return {
            ...book,
            notes: book.notes.filter((note) => note.id !== noteId),
          };
        }
        return book;
      })
    );
  };

  const addBook = (newBook: booktype) => {
    setBooks((book) => [...book, newBook]);
  };

  const findNote = (bookId: string, noteId?: number) => {
    const book = books.find((book) => book.id == bookId);
    if (noteId && book) {
      const note = book?.notes.find((note) => note.id === noteId);
      return { book, note };
    }
    return { book };
  };

  const deleteBook = (bookId: string) => {
    setBooks(books.filter((book) => book.id !== bookId));
  };

  return (
    <BookContext.Provider
      value={{
        books,
        setBooks,
        addNote,
        editNote,
        deleteNote,
        addBook,
        findNote,
        deleteBook,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}

export default BookProvider;

export const useBooks = () => {
  return useContext(BookContext);
};
