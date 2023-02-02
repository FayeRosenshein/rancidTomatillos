import React, { Component } from "react"
import MovieCard from '../MovieCard/MovieCard'

class App extends Component {
	constructor() {
		super()
		this.state = {
			movieCard: []
		}
	}
	render() {
		return (
			<main>
				<h1>Rancid Tomatillos</h1>
				<Header />
				<MovieCard />
			</main>
		)
	}
}

export default App
