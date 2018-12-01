import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getBooksQuery = gql`
  {
    books {
      id
      name
      genre
    }
  }
`;

class BookList extends Component {
  getBooks() {
    const data = this.props.data;
    if (data.loading) {
      return <div>Loading books .....</div>;
    } else {
      return data.books.map(book => (
        <li key={book.id}>
          {book.name}-----{book.genre}
        </li>
      ));
    }
  }
  render() {
    console.log(this.props);
    return (
      <div className="book__list">
        <h1>Book List</h1>
        <ul>{this.getBooks()}</ul>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
