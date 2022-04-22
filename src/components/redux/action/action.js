import { getAll } from "../../../BooksAPI"

const URL = "https://jsonplaceholder.typicode.com/posts" 
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