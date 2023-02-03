import React from 'react';
import './Top5.css'
import movies from '../../movieData';
import MovieCard from "../MovieCard/MovieCard";
import MovieInfo from "../MovieInfo/MovieInfo";

export default function Top5({allMovieInfo}) {
	
	const sortedMovies = allMovieInfo.sort((a, b) => {
		return b.average_rating - a.average_rating
	})
	console.log('sortedMovies', sortedMovies)
	const topFive = sortedMovies.map(movie => {
		return (
			<MovieCard
				image={movie.backdrop_path}
				title={movie.title}
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