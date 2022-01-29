import React, {useEffect, useState} from 'react'
import ButtonComponent from '../components/ButtonComponent'
import EventCard from '../components/EventCard'
import Header from '../components/Header'
import InputComponent from '../components/InputComponent'

// styles
const pageStyles = {
	color: '#232129',
	padding: 96,
	fontFamily: '-apple-system, Roboto, sans-serif, serif',
}

// markup
const IndexPage = () => {
	const [name, setName] = useState('')
	const [events, setEvents] = useState({})
	const [options, setOptions] = useState([])

	function handleChange(e) {
		setName(e.target.value)
	}
	async function handleClick() {
		await fetchEvent(name)
	}

	//   ${name}
	useEffect(() => {
		async function fetchEvents() {
			const response = await fetch(
				`https://app.ticketmaster.com/discovery/v2/events.json?size=200&keyword=${name}&city=London&apikey=${process.env.API_KEY}`
			)
			const data = await response.json()
			// console.log('data: ', data._embedded.events)
			setEvents(data._embedded.events.slice(0, 50))
			const eventTypes = data._embedded.events.map(
				e => e.classifications[0].segment.name
			)
			const filteredEvents = eventTypes.filter(
				(e, i) => eventTypes.indexOf(e) === i
			)
			// console.log('types: ', eventTypes)
			// console.log('filteredEvents: ', filteredEvents)
			// const eventTypes = data._embedded.events.filter(type=> )
			setOptions(filteredEvents)
		}
		fetchEvents()
		console.log('name: ', name)
	}, [])
	useEffect(() => {}, [])
	async function fetchEvent(e) {
		// setName(e.target.value)
		const url =
			name.length > 0
				? `https://app.ticketmaster.com/discovery/v2/events.json?size=200&keyword=${name}&city=London&apikey=${process.env.API_KEY}`
				: `https://app.ticketmaster.com/discovery/v2/events.json?size=200&city=London&apikey=${process.env.API_KEY}`
		const response = await fetch(url)
		const data = await response.json()
		setEvents(data._embedded.events.slice(0, 50))
	}
	return (
		<main style={pageStyles}>
			<Header events={options} />
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
