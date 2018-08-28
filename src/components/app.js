import React, { Component } from 'react';
import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}


// Notes

// React is the View (UI) container for an application. This has a state object (referred to as component state) for every class. Redux is the Data container for an application. It is all stored in one object called state (referred to as application state or Redux state).
// Redux reducers - a function that returns a piece of the application state. These functions take two arguments (state [not the application state but just the state the reducer is responsible for], action [this is the action that gets passed through with Action Creators]);
// React Container(aka smart component, dumb components have no connection to Redux) - is a react component that has a direct connection to the Redux state. In other words, our react views pull data from the redux state to display on the application.
// There are 3 libraries we usually work with. React, Redux, and React-Redux. The last one is the intersectio/bridge of the two but is a separate library all together. It is usually referred to as the working or usable app
//Redux Action Creator - This is similar to an event-listener in Javascript. When a direct(button click, hover over an element) or indirect(AJAX call completes, page completely loads) action occurs then an Action Creator function is ran. It is sent to all reducers in your project. All reducers have a switch statement to determine if this action should trigger any update in data or not. For all reducers that are triggered they will run some code (update the reducer data) then update the application state. Then the application will rerender all updated information.

