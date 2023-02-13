import React from 'react';
import MovieCard from "../MovieCard/MovieCard";
import SearchBar from '../SearchBar/SearchBar';
import './AllMovies.css';
import { Link } from 'react-router-dom';

export default function AllMovies({allMovieInfo, setMovieId}) {
	const [searchInput, setSearchInput] = React.useState('')
	
	const filteredMovies = allMovieInfo.filter(movie => movie.title.toLowerCase().match(searchInput.toLowerCase()))

	const moviesCards = allMovieInfo.map(movie => {
		return (
			<Link to={`/${movie.id}`} key={movie.title} style={{ textDecoration: 'none' }}>
				<MovieCard
					key={movie.id}
					id={movie.id}
					image={movie.backdrop_path}
					rating={movie.average_rating}
					title={movie.title}
					setMovieId={setMovieId}
				/>
			</Link>
		)
	})

	const moviesFiltered = filteredMovies.map(movie => {
		return (
			<Link to={`/${movie.id}`} key={movie.title} style={{ textDecoration: 'none' }}>
				<MovieCard
					key={movie.id}
					id={movie.id}
					image={movie.backdrop_path}
					rating={movie.average_rating}
					title={movie.title}
					setMovieId={setMovieId}
				/>
			</Link>
		)
	})

	return (
		<section>
			<div className='all-movies-nav'>
				<h2 className='all-movies-title' >All Movies</h2>
				<SearchBar setSearchInput={setSearchInput} searchInput={searchInput}/>
			</div>
			<div className='movie-container'>
				{searchInput && moviesFiltered}
				{!searchInput && moviesCards}
			</div>
		</section>
	)
}