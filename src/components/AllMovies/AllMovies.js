import React from "react"
import Card from "../MovieCard/MovieCard"

class AllMovies extends React.Component {
	constructor() {
		super()
		this.state = {
			movieCards: []
		}
	}
	componentDidMount() {
		fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
			.then((response) => response.json())
			.then((data) => {
				console.log('data', data)
				this.setState({movieCards: [...data.movies]})
			})
			.catch(error => {
				console.log(error)
			})}
	allMovieCards() {
	const movies = this.state.movieCards.map(movie => {
		return (
			<Card 
				title={movie.title}
				backdrop_path={movie.backdrop_path}
			/>
		)
	})}
	render() {
	return (
		<section>
			{this.allMovieCards()}
		</section>
	)}
}

export default AllMovies