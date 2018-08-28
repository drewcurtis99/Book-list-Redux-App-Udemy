//selectBook is an Action Creator, it needs to return an action, which is an object. It needs to have a type property which is the conditional parameter for reducers to run different pieces of application state. It also has any other number of properties but payload is a convention for default data.
export function selectBook(book) {
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}