const BookCard = (props) => {
	const { title, author, url, prize } = props

	const handleClick = (title) => {
		console.log(`Anda Telah Membeli Buku ${title}`)
	}

	return (
		<article className='col col-lg-3 col-sm-6 my-1'>
			<div className='card'>
				<img src={url} alt='' className='img-fluid p-3' />
				<div
					className='card-body light-gray'
					style={{ maxHeight: '20em' }}
				>
					<h5 className='card-title'>{title}</h5>
					<h6 className='card-text text-secondary'>{author}</h6>
					<p className='text-danger'>{prize}</p>
					<button
						type='button'
						className='btn btn-success'
						onClick={() => handleClick(title)}
					>
						Buy
					</button>
				</div>
			</div>
		</article>
	)
}

export { BookCard }
