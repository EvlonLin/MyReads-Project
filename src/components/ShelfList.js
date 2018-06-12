import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Shelf from './Shelf'

class ShelfList extends Component {
	render() {
        const currentBooks = this.props.books.filter( book => book.shelf === 'currentlyReading')
        const wantBooks = this.props.books.filter( book => book.shelf === 'wantToRead')
        const readBooks = this.props.books.filter( book => book.shelf === 'read')

		return (
            <div>
                <div className="list-books-content">
                    <div>
                    	<Shelf books={currentBooks} onShelfUpdate={this.props.onShelfUpdate} shelfTitle='Currently Reading'/>
                    	<Shelf books={wantBooks} onShelfUpdate={this.props.onShelfUpdate} shelfTitle='Want to Read'/>
                    	<Shelf books={readBooks} onShelfUpdate={this.props.onShelfUpdate} shelfTitle='Read'/>
                	</div>
                </div>
                <div className="open-search">
                    <Link to='/search'>Add a book</Link>
                </div>
            </div>
		)
	}
}

export default ShelfList