import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { searchBooks } from '../redux/action/action'
import Book from '../ListBookContent/Book'
import { useEffect } from 'react'
import { fetchingBooks } from '../redux/action/action'
function SearchPage() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchingBooks())
}, [dispatch])
  const books = useSelector(state => state.books)
  const searchedBooks = useSelector(state => state.search)
  const onSearchValueChange = (event) => {
   dispatch(searchBooks(event.target.value, books));
  };

  return (
    <div className="search-books">
            <div className="search-books-bar">
              <Link to={"/"}>
                <button className="close-search">Close</button>
              </Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" onChange={ onSearchValueChange}/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {searchedBooks.map((book) => { return(
                  <li key={book.id}>
                  <Book book={book} books={books}/>
                </li>
              )})}
              </ol>
            </div>
          </div>
  )
}

export default SearchPage