import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
	return (
		<div className=' flex justify-center items-center'>
			<div id="notfound" className="notfound ">
				<div className="notfound-404">
					<h1>404</h1>
					<h2>Page not found</h2>
				</div>
				<Link to="/">Homepage</Link>
			</div>
		</div>
	)
}
