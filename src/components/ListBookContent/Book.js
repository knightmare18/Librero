import React from 'react'
import { update } from '../../BooksAPI'
import { useDispatch } from 'react-redux'
import { updateShelf } from '../redux/action/action'
function Book(props) {
  const dispatch = useDispatch()
  return (
    <div className="book" key={props.book.id}>
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.book.imageLinks.smallThumbnail})` }}></div>
                  <div className="book-shelf-changer">
                    <select value={props.book.shelf} onChange={(sel) => {dispatch(updateShelf(props.book.id, sel.target.value, props.books)); update(props.book, sel.target.value)}}>
                      <option value="move" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{props.book.title}</div>
                <div className="book-authors">{props.book.authors}</div>
              </div>
  )
}




export default Book