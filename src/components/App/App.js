import React, { Component } from "react"
import Card from '../MovieCard/MovieCard'

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
				<Card />
			</main>
		)
	}
}

export default App
