import { combineReducers } from 'redux'; //this property is what ties together all reducers.
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

//Each key in the combineReducers function is assigned a reducer which is responsible for creating a piece of Redux state. Reminder: reducers change application state over time through the use of actions.
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;

