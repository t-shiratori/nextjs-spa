import React from 'react'
import { Link } from 'react-router-dom'

export const Navigation = () => {
	return (
		<nav className="border border-indigo-600 m-4">
			<ul className="p-4 flex justify-around items-center mx-auto">
				<li>
					<Link to="/">to Top Page</Link>
				</li>
				<li>
					<Link to="/about">tp About Page</Link>
				</li>
			</ul>
		</nav>
	)
}
