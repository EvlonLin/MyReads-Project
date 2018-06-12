import React, { Component } from 'react'

class Books extends Component {
	render() {
    const {book, onShelfUpdate} = this.props
    //show img of the book if the server provided one
    const imageThumb = book.imageLinks ? book.imageLinks.smallThumbnail : null;
    //shows the current shelf for all books
    const hasBookShelf = book.shelf ? book.shelf : `none`;
		return (
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url("${ imageThumb }")` }}></div>
                <div className="book-shelf-changer">
                  <select value = {hasBookShelf} onChange={e => onShelfUpdate(this.props.book, e.target.value)}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors}</div>
            </div>
		)
	}
}

export default Books