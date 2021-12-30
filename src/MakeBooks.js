import React from 'react'
import { nanoid } from 'nanoid'
import { BookCard } from './BookCard'

const MakeBooks = (props) => {
	const colBooks = props.booksList.map((item) => {
		item.id = item.id ?? item.id ?? nanoid(10)
		return <BookCard key={item.id} {...item} />
	})
	return colBooks
}

export { MakeBooks }
