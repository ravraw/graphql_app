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
  render() {
    return (
      <div className="book__list">
        <h1>Book List</h1>
        <ul>
          <li>Book 1</li>
        </ul>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
