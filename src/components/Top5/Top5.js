import React from 'react';
import MovieCard from "../MovieCard/MovieCard";
import './Top5.css'

export default function Top5({allMovieInfo, setMovieId}) {
	
	const sortedMovies = allMovieInfo.sort((a, b) => {
		return b.average_rating - a.average_rating
	})
	
	const topFive = sortedMovies.map(movie => {
		return (
			<MovieCard
				key={movie.id}
				id={movie.id}
				image={movie.backdrop_path}
				rating={movie.average_rating}
				title={movie.title}
				setMovieId={setMovieId}
			/>
		)
	})

	return (
		<section className="top-five">TOP 5 MOVIES
			<div className='top-5-label'>
				{topFive[0]}
				{topFive[1]}
				{topFive[2]}
				{topFive[3]}
				{topFive[4]}
			</div>
		</section>
	)
}