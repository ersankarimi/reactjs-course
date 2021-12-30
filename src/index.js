import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import 'bootstrap'
import { booksList } from './bookList'
import { MakeBooks } from './MakeBooks'

const Booklist = () => {
	return (
		<div className='container-fluid p-3 '>
			<div className='row'>
				<MakeBooks booksList={booksList} />
			</div>
		</div>
	)
}

ReactDom.render(<Booklist />, document.querySelector('#root'))
