import { createContext, useState, useContext } from "react";
import { booktype } from "../types/type";

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
        },
        {
          id: 2,
          Headline: "Understanding state Managment",
          content:
            "State Managment is a crucial part of modern web application ",
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
  return (
    <BookContext.Provider value={{ books, setBooks }}>
      {children}
    </BookContext.Provider>
  );
}

export default BookProvider;

export const useBooks = () => {
  return useContext(BookContext);
};
