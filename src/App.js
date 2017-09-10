import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MyReads from './MyReads';
import SearchBooks from './SearchBooks';
import * as BooksAPI from './BooksAPI';
import './App.css'

class BooksApp extends Component {
  state = { books: [] }

  componentDidMount() {
    // get books on loading
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  updateShelf = (newBook, newShelf) => {
    BooksAPI.update(newBook, newShelf).then((update) => {
      newBook.shelf = newShelf;
      const updatedBooks = this.state.books.filter( book => book.id !== newBook.id );
      updatedBooks.push(newBook);
      this.setState({ books: updatedBooks })
    })
  }

  render() {
    const { books } = this.state;

    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <MyReads
              books={books}
              updateShelf={this.updateShelf}
            />
          </div>
        )} />
        <Route path='/search' render={({ history }) => (
            <SearchBooks
              books={books}
              updateShelf={this.updateShelf}
            />
        )}/>
      </div>
    )
  }
}

export default BooksApp
