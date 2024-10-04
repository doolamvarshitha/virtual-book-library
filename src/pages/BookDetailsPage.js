import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { BookContext } from '../context/BookContext';

const BookDetailsPage = () => {
    const { id } = useParams();
    const { books, addToLibrary } = useContext(BookContext);
    const book = books.find(b => b.id === parseInt(id));

    if (!book) return <div>Book not found</div>;

    return (
        <div>
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Genre: {book.genre}</p>
            <p>Rating: {book.rating}</p>
            <p>Description: {book.description}</p>
            <p>Publication Year: {book.publication_year}</p>
            <button onClick={() => addToLibrary(book)}>Add to My Library</button>
        </div>
    );
};

export default BookDetailsPage;
