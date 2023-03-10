import React from 'react';
import MovieCard from "../MovieCard/MovieCard";
import './Top5.css'
import { Link } from 'react-router-dom';

export default function Top5({allMovieInfo, setMovieId}) {
	let moviesCopy = [...allMovieInfo]
	const sortedMovies = moviesCopy.sort((a, b) => {
		return b.average_rating - a.average_rating
	})
	
	const topFive = sortedMovies.map(movie => {
		return (
			<Link to={`/${movie.id}`} style={{ textDecoration: 'none' }}>
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
		<section className="top-five">
			<h2 className='top-5-title' >TOP 5 MOVIES</h2>
			<div className='top-5-container'>
				{topFive[0]}
				{topFive[1]}
				{topFive[2]}
				{topFive[3]}
				{topFive[4]}
			</div>
		</section>
	)
}