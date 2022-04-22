import { getAll } from "../../../BooksAPI"
export function searchBooks(query, books){
   return {
      type: "SEARCH_BOOKS",
      query: query,
      books: books
   }
}
export function updateShelf(id, shelf, books) {
    return {
        type: "UPDATE_SHELF",
        books: books,
        book: id,
        shelf: shelf
    }
}
function fetchedBooks(books) {
   return { type: "FETCHED_BOOKS", books }
} 
function loadingBooks() {
   return { type: "LOADING_BOOKS" }
} 
function fetchingBooks(books) {
   return (dispatch) => {
      dispatch(loadingBooks())

      getAll().then(books => dispatch(fetchedBooks(books)))
         }  
   }
export { fetchingBooks };