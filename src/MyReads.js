import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';

class MyReads extends Component {
  static PropTypes = {
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired
  }

  render() {
    const { books, updateShelf } = this.props;
    const shelfTypes = [{ type: 'currentlyReading', title: 'Currently Reading' },
                        { type: 'wantToRead',  title: 'Want to Read' },
                        { type: 'read', title: 'Read'}];

    return (
      <div className="list-books-content">
        {shelfTypes.map((shelf, index) =>  {
          const shelfBooks = books.filter( book => book.shelf === shelf.type)
          return  (
            <div className="bookshelf" key={index}>
              <h2 className="bookshelf-title">{ shelf.title }</h2>
              <div className="bookshelf-books">
                <BookShelf
                  books={shelfBooks}
                  updateShelf={updateShelf}
                />
              </div>
            </div> )
        })}
        <div className="open-search">
          <Link to='/search' />
        </div>
      </div>
    );
  }
}

export default MyReads;
