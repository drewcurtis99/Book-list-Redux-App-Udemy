// The state argument is give a default value of null. THis is because once the app loads and no book is currently selected then the state will be undefined. Reducers throw an error on a value of undefined hence the default value of null.

export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }

  return state;
}