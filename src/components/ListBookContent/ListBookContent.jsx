import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchingBooks } from '../redux/action/action'
import Book  from './Book'

function ListBookContent(props) {
  useEffect(() => {
      props.fetchingBooks()
  }, [])
  const books = props.books
  return(
    <div>
    { books !== undefined && books.length > 0 ? (
      <div>
    <div className="list-books-content">
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>

        <div className="bookshelf-books">
          <ol className="books-grid">
          {books.map((book) => {
            return (book.shelf === "currentlyReading") ? (
                  <li key={book.id}>
                  <Book book={book} books={books}/>
                </li>
              
              ) : undefined })}
         
          </ol>
        </div>
      </div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">Want to Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {books.map((book) => {
            return (book.shelf === "wantToRead") ? (
                  <li key={book.id}>
                  <Book book={book} books={books}/>
                </li>
              
              ) : undefined })}
          </ol>
        </div>
      </div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {books.map((book) => {
            return (book.shelf === "read") ? (
                  <li key={book.id}>
                  <Book book={book} books={books}/>
                </li>
              
              ) : undefined })}
          </ol>
        </div>
        </div>
        </div>
        </div>
        </div>
        ) : undefined}
        </div>
  )
}
const mapStateToProps = (state) => {
    return {
       books: state.books,
       loading: state.loading
    }
 }
 const mapDispatchToProps = (dispatch) => {
    return {
       fetchingBooks: () => { dispatch(fetchingBooks()) }
    }
 }

  
export default connect(mapStateToProps, mapDispatchToProps)( ListBookContent)