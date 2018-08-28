import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    //This code is required because the activeBook is initially set to null. If you run the code "this.props.book.title" you are asking for the title of null. So we have to return something else until a book is actively selected.
    if (!this.props.book) {
      return <div>Select a book to get started.</div>;
    }


    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);