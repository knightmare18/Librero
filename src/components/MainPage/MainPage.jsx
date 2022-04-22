import React from 'react'
import { Link } from 'react-router-dom'
import ListBookContent from '../ListBookContent/ListBookContent'
function MainPage(props) {
  return (
    <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
                  <ListBookContent />
            <div className="open-search">
             <Link to={"/search"}>
              <button>Add a book</button>
             </Link>
            </div>
          </div>
  )
}
export default MainPage