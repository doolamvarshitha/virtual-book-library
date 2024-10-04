import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';

const MyLibraryPage = () => {
    const { myLibrary, removeFromLibrary } = useContext(BookContext);

    return (
        <div>
            <h1>My Library</h1>
            {myLibrary.length === 0 ? (
                <p>Your library is empty.</p>
            ) : (
                <ul>
                    {myLibrary.map(book => (
                        <li key={book.id}>
                            {book.title}
                            <button onClick={() => removeFromLibrary(book.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MyLibraryPage;
