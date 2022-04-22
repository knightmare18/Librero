import { combineReducers } from 'redux'; 
const booksReducer = (initialState = [], action) => {
   switch (action.type) {
      case "FETCHED_BOOKS":
         return action.books
 
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
const rootReducer = combineReducers({
   books: booksReducer,
   loading: loadingReducer,
}) 
export default rootReducer;