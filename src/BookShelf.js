import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Book from './Book'

class BookShelf extends Component {
  static propTypes = {
    updateShelf: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired
  }

  render() {
    const { books, updateShelf } = this.props

    return (
      <ol className="books-grid">
        {books.map((book) => (
          <Book
            books={books}
            book={book}
            key={book.id}
            updateShelf={updateShelf}
          />
        ))}
      </ol>
    )
  }

}

export default BookShelf;
