import React from 'react'

function Header({events}) {
	return (
		<header>
			<h3>Event Finder</h3>
			<nav>
				<select name='' id=''>
					{events.map(event => {
						return (
							<option value={event} key={event}>
								{event}
							</option>
						)
					})}
				</select>
			</nav>
		</header>
		// <option value='movie2'>movie2</option>
	)
}

export default Header
