import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ShelfList from './components/ShelfList'
import Search from './components/Search'

class BooksApp extends React.Component {
  state = {
    books:[],
    showSearchPage: false
  }
//get all the book from server
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    })
  }
//function for change bookshelf for book
  shelfUpdate = (newBook, shelf) => {
    newBook.shelf = shelf
    BooksAPI.update(newBook,shelf)
      .then(
        this.setState((state) => ({
          books: state.books.map(b => {
            if (b.id === newBook.id) {
              b.shelf = shelf;
              return b
            } else {
              return b
            }
          })
        }))
      ).then(() => this.componentDidMount());
  }

  render() {
//render the page with components
    return (
      <div className="app">
          <Route path='/search' render={({ history }) => (
            <Search
            books={this.state.books} 
            onShelfUpdate={this.shelfUpdate}
            />
          )}/>
          <Route exact path='/' render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <ShelfList 
              books={this.state.books} 
              onShelfUpdate={this.shelfUpdate}
              />
            </div>
          )}/>
      </div>
    )
  }
}

export default BooksApp
