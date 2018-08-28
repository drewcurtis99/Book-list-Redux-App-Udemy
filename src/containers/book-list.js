import React, { Component } from 'react';
import { connect } from 'react-redux'; // importing this property 'connect' forges the connection between react and redux to give access to the Redux state.
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux'; // this property hosts code to ensure the action from selectBook flows through all of our reducers.

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  //This function is availiable thorugh the react-redux library. Anything returned will show up as a props inside of BookList. The parameter to this funciton is 'state' which takes our application state as the argument.
  return {
    books: state.books
  };
}

//Anything returned from this function will end up as a props on BookList container. Whenever selectBook property is called in this function, the result(the Action Creator) will be passed to all reducers/
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(BookList); // When you have a container you don't want to export the component but the container. The connect function takes two arguments, a function(s) and a component. It then produced a container which is aware of the Redux state.

