import React, { Component } from 'react';

// componets

import BookList from './components/BookList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Book Store</h1>
        <BookList />
      </div>
    );
  }
}

export default App;
