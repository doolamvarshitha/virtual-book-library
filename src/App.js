import React from 'react'
import './App.css'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {BookProvider} from './context/BookContext'
import HomePage from './pages/HomePage'
import BookDetailsPage from './pages/BookDetailsPage'
import MyLibraryPage from './pages/MyLibraryPage'

const App = () => {
  return (
    <BookProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book/:id" element={<BookDetailsPage />} />
          <Route path="/mylibrary" element={<MyLibraryPage />} />
        </Routes>
      </Router>
    </BookProvider>
  )
}

export default App
