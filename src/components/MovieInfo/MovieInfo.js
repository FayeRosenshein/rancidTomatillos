import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MovieInfo.css'

export default function MovieInfo({ singleMovie, setSingleMovie }) {
	const navigate = useNavigate()
	// function handleClick() {
	//   setSingleMovie('')
	// }

	return (
		<section>
			<button onClick={() => navigate("/")}>Home</button>
			<img src={singleMovie.poster_path} alt={singleMovie.title} width={300} />
			<p>{singleMovie.title}</p>
			<p>{singleMovie.release_date}</p>
			<p>{singleMovie.overview}</p>
			<p>{singleMovie.genres}</p>
			<p>{singleMovie.budget}</p>
			<p>{singleMovie.average_rating}</p>
		</section>
	)

}