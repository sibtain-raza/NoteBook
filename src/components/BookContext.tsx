import { createContext, useState, useContext } from "react";
import { Notetype, booktype } from "../types/type";

export const BookContext = createContext<any>([]);

function BookProvider({ children }: { children: any }) {
  //dummy Book
  const Books: booktype[] = [
    {
      id: "Book1",
      name: "My first Book",
      notes: [
        {
          id: 1,
          Headline: "Introduction to React",
          content: "React is a popular library for building user interface ",
          isStarred: true,
          isArchived: false,
        },
        {
          id: 2,
          Headline:
            "Understanding state Managment State Managment is a crucial part of modern web application",
          content:
            "State Managment is a crucial part of modern web application ",
          isArchived: true,
          isStarred: false,
        },
      ],
    },
    {
      id: "Book2",
      name: "Personal Thought",
      notes: [
        {
          id: 3,
          Headline: "my Favorite Hobbies",
          content: "I love exploring , biking, hiking and cooking",
        },
      ],
    },
  ];
  //DUMMY Book

  const [books, setBooks] = useState<booktype[]>([...Books]);
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
