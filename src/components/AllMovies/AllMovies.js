import React from 'react';
import MovieCard from "../MovieCard/MovieCard";
import './AllMovies.css';
import { Link } from 'react-router-dom';

export default function AllMovies({allMovieInfo, setMovieId}) {


console.log('AllMoviesprops', allMovieInfo)
	const moviesCards = allMovieInfo.map(movie => {
		return (
			<Link to={`/${movie.id}`} key={movie.title}>
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
			<p>All Movies</p>
			<div className='movie-container'>
				{moviesCards}
			</div>
		</section>
	)
}