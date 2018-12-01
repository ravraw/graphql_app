import React, { Component } from 'react';

import { graphql } from 'react-apollo';
import { getBooksQuery } from '../queries/queries';

// componets

import BookDetails from './BookDetails';
class BookList extends Component {
  constructor(props) {
    super();
    this.state = {
      selected: null
    };
  }
  getBooks() {
    const data = this.props.data;
    if (data.loading) {
      return <div>Loading books .....</div>;
    } else {
      return data.books.map(book => (
        <li key={book.id} onClick={e => this.setState({ selected: book.id })}>
          {book.name}-----{book.genre}
        </li>
      ));
    }
  }
  render() {
    return (
      <div className="book__list">
        <h1>Book List</h1>
        <ul>{this.getBooks()}</ul>
        <BookDetails bookId={this.state.selected} />
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
