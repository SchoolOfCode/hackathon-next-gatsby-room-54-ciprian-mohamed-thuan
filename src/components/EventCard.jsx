import React from 'react'

function EventCard({event}) {
	return (
		<div>
			<h3>Event Type: {event.classifications[0].segment.name}</h3>
			<h2>Event Name: {event.name}</h2>
			<img src={event.images[0].url} alt={event.name} />
			<p>Event Date: {event.dates.start.localDate}</p>
			<p>Event Time: {event.dates.start.localTime}</p>
			<button>
				<a href={event.url} target='_blank noopener norefferer'>
					Buy Ticket
				</a>
			</button>
		</div>
	)
}

export default EventCard
