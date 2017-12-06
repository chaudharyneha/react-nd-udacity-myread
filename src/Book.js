import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
    updateShelf: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired
  }

  calculateShelf = (book, currentShelf) => {
    const { books } = this.props;

    for (let item of books ) {
      if (item.id === book.id)  {
        currentShelf = item.shelf;
        break;
      }
    }
    return currentShelf;
  }

  render() {
    const { books, book, updateShelf } = this.props
    console.log('boooldkdkdnf: ', book);
    let currentShelf = 'none'

    return (
      <li key={book.id}>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
            <div className="book-shelf-changer">
              <select  onChange={(event) => updateShelf(book, event.target.value)} defaultValue={this.calculateShelf(book, currentShelf)}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors && book.authors.forEach(author => <span> {author}{' '} </span>)}</div>
        </div>
      </li>
    )
  }

}

export default Book;
