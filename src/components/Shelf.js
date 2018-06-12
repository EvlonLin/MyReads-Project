import React, { Component } from 'react'
import Books from './Books'

class Shelf extends Component {
	render() {
		const {books, onShelfUpdate} = this.props
		return (
            <div className="bookshelf">
				<h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
				<div className="bookshelf-books">
					<ol className='books-grid'>
					{
                        books.map((book) => {
                            return <li key={book.id}>
                                <Books 
                                book={book}
                                onShelfUpdate={onShelfUpdate}/>
                            </li>
                        })
					}
					</ol>
				</div>
			</div>
		)
	}
}

export default Shelf