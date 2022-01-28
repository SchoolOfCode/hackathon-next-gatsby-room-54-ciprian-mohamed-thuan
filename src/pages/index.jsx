import React, {useState} from 'react'
import ButtonComponent from '../components/ButtonComponent'
import EventCard from '../components/EventCard'
import InputComponent from '../components/InputComponent'
import Navbar from '../components/Navbar'

// styles
const pageStyles = {
	color: '#232129',
	padding: 96,
	fontFamily: '-apple-system, Roboto, sans-serif, serif',
}

// markup
const IndexPage = () => {
	const [name, setName] = useState('')
	const [events, setEvent] = useState({})

	function handleChange(e) {
		setName(e.target.value)
		console.log(e.target.value)
	}
	function handleClick(e) {
		fetchEvents()
	}

	//   ${name}
	async function fetchEvents() {
		const response = await fetch(
			`https://app.ticketmaster.com/discovery/v2/events.json?size=10&keyword=${name}&city=London&apikey=${process.env.API_KEY}`
		)
		const data = await response.json()
		console.log('data: ', data._embedded.events)
		setEvent(data._embedded.events)
		console.log('events: ', events)
	}

	return (
		<main style={pageStyles}>
			<Navbar />
			<InputComponent
				handleChange={e => {
					handleChange(e)
				}}
				name={name}
			/>
			<ButtonComponent
				handleClick={e => {
					handleClick(e)
				}}
			/>
			{events.length > 0 &&
				events.map(event => {
					return <EventCard key={event.id} event={event} />
				})}
		</main>
	)
}
export default IndexPage
