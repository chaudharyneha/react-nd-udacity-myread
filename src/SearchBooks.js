import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';

class SearchBooks extends Component {
  static PropTypes = {
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired
  }

  state = {
    query: '',
    newBooks: [],
    searchErr: false
  }

  getBooks = (event) => {

    const query = event.target.value.trim()
    this.setState({ query: query })

    if (query) {
      BooksAPI.search(query, 20).then((books) => {
        books.length > 0 ?  this.setState({newBooks: books, searchErr: false }) : this.setState({ newBooks: [], searchErr: true })
      })

  } else this.setState({newBooks: [], searchErr: false })
  }

  calculateShelf = book => {
    const { books } = this.props;
    let currentShelf = 'none';

    for (let item of books ) {
      if (item.id === book.id)  {
        currentShelf = item.shelf
        break
      }
    }
    return currentShelf;
  }

  render() {

    const { query, newBooks, searchErr } = this.state
    console.log('newBooks....',newBooks);
    const { updateShelf } = this.props

      return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search"  to="/">Close</Link>
            <div className="search-books-input-wrapper">
              <input type="text"
                placeholder="Search by title or author"
                value={ query }
                onChange={ this.getBooks } />
            </div>
          </div>
          <div className="search-books-results">
            { newBooks.length > 0 && (
              <div>
                <div className=''>
                  <h3>Search returned { newBooks.length } books </h3>
                </div>
                <ol className="books-grid">
                  {newBooks.map((book) => (
                    <li key={book.id}>
                      <div className="book">
                        <div className="book-top">
                          <div className="book-cover" style={{
                              width: 128,
                              height: 193,
                              backgroundImage: `url("${book.imageLinks.thumbnail}")`
                            }}>
                          </div>
                          <div className="book-shelf-changer">
                            <select onChange={(event) => updateShelf(book, event.target.value)} defaultValue={this.calculateShelf(book)}>
                              <option value="none" disabled>Move to...</option>
                              <option value="currentlyReading">Currently Reading</option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors && book.authors.map(author =>
                            <span>{author}{' '}</span>)}
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            )}
            { searchErr  && (
              <div>
                <div className=''>
                  <h3>Search returned 0 books.  Please try again!</h3>
                  </div>
                </div>
            )}
          </div>
        </div>
      )}
}

export default SearchBooks;
