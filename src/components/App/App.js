import React, { Component } from "react"
import AllMovies from "../AllMovies/AllMovies"
function App() {
// class App extends Component {
	// constructor(props) {
	// 	super(props)
	// 	this.state = {
	// 		movieCards: [],
	// 		error: ''
	// 	}
	// }

	// componentDidMount() {
	// 	fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
	// 		.then((response) => response.json())
	// 		.then((data) => {
	// 			console.log('data', data)
	// 			this.setState({movieCards: [...data.movies]})
	// 		})
	// 		.catch(error => {
	// 			this.setState(({error: error}))
	// 		})
	// }

	// render() {
		return (
			<main>
				<h1>Rancid Tomatillos</h1>
				<AllMovies />
			</main>
		)
	// }
}

export default App