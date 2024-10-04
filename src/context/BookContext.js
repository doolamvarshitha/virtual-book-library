import React, { createContext, useState } from 'react';
import booksData from '../data/books.json';

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
    const [books] = useState(booksData.books);
    const [myLibrary, setMyLibrary] = useState([]);

    const addToLibrary = (book) => {
        setMyLibrary((prev) => [...prev, book]);
    };

    const removeFromLibrary = (id) => {
        setMyLibrary((prev) => prev.filter(book => book.id !== id));
    };

    return (
        <BookContext.Provider value={{ books, myLibrary, addToLibrary, removeFromLibrary }}>
            {children}
        </BookContext.Provider>
    );
};
