import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
    updateShelf: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired
  }

  calculateShelf = (book, books) => {
    let currentShelf = 'none';

    for (let item of books ) {
      if (item.id === book.id)  {
        currentShelf = item.shelf;
        break;
      }
    }
    return currentShelf;
  }

  render() {
    const { books, book, updateShelf } = this.props;
    const thumbnail = book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : null;

    return (
      <li key={book.id}>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ backgroundImage: `url("${thumbnail}")` }}></div>
            <div className="book-shelf-changer">
              <select  onChange={(event) => updateShelf(book, event.target.value)} defaultValue={this.calculateShelf(book, books)}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors && book.authors.map(author => <span> {author}{' '} </span>)}</div>
        </div>
      </li>
    )
  }

}

export default Book;
