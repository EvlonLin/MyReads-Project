import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI';
import Books from './Books'

class Search extends Component {
  state = {
    bookslist:[],
    query: ''
  }
//update the search query and get books that matched
  updateQuery = (query) => {
    BooksAPI.search(query).then(bookslist => {
      if (query&&!bookslist.error){
        bookslist = bookslist.map( book => {
          const bookShelf = this.props.books.find(b => b.id === book.id);
          if (bookShelf) {
            book.shelf = bookShelf.shelf;
          }
          return book;
        })
        this.setState({ bookslist })
      }else{
        this.setState({bookslist:[]})
      }
    })
    this.setState({ query })
  }

  render() {
    const { bookslist,query } = this.state
    const { onShelfUpdate } = this.props

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            <input 
            type="text" 
            value={query} 
            placeholder="Search by title or author"
            onChange={e => this.updateQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">{
            bookslist.map((book) => {
              return <li key={book.id}>
              <Books 
              book={book}
              onShelfUpdate={onShelfUpdate}
              />
              </li>
            })
          }
          </ol>
        </div>
      </div>
    )
  }
}

export default Search