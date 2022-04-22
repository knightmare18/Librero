import { combineReducers } from 'redux'; 


const booksReducer = (initialState = [], action) => {
   switch (action.type) {
      case "FETCHED_BOOKS":
         return action.books
      case "UPDATE_SHELF": {
        const books = action.books.filter(book => action.book === book.id ? book.shelf = action.shelf : [])
        console.log(books)
        return books
      }
      default: 
      return initialState
    }
}

const loadingReducer = (initialState = "false", action) => {
   switch (action.type) {
      case "FETCHED_POSTS":
         return false
      case "LOADING_POSTS":
         return true
      default:
         return initialState
   }
}

const searchingBooks = ( initialState= [], action) => {
   switch(action.type){
      case "SEARCH_BOOKS": {
         const query = action.query.toLowerCase()
         const books =  action.books.filter(book => {
             const lowerBooks = book.title.toLowerCase()
             return lowerBooks.includes(query) ? book : undefined
          })
          return books
       }
        default:
           return initialState
        }
   }

const rootReducer = combineReducers({
   books: booksReducer,
   loading: loadingReducer,
   search: searchingBooks
}) 
export default rootReducer;