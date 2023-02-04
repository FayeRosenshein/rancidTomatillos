import React from 'react';
import MovieCard from "../MovieCard/MovieCard";
import './AllMovies.css';

export default function AllMovies({allMovieInfo, setMovieId}) {




console.log('AllMoviesprops', allMovieInfo)
	const moviesCards = allMovieInfo.map(movie => {
		return (
			<MovieCard
				key={movie.id}
				id={movie.id}
				image={movie.backdrop_path}
				title={movie.title}
				setMovieId={setMovieId}
			/>
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