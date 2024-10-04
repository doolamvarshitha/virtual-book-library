import React, {useContext, useState} from 'react'
import {BookContext} from '../context/BookContext'
import BookList from '../components/BookList'
import SearchBar from '../components/SearchBar'

const HomePage = () => {
  const {books} = useContext(BookContext)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredBooks = books.filter(
    book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.genre.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div>
      <h1>Book Library</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <BookList books={filteredBooks} />
    </div>
  )
}

export default HomePage
