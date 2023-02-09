import React, { useState } from 'react'
import { Link } from "react-router-dom";
import MovieCard from "../MovieCard/MovieCard";

export default function SearchBar({ allMovieInfo, setMovieId }) {
	const [searchInput, setSearchInput] = useState("")

	const handleChange = (e) => {
		e.preventDefault()
		setSearchInput(e.target.value)
	}
	if (searchInput.length > 0) {
		const filteredMovies = allMovieInfo.filter(movie => {
			movie.title.match(searchInput)
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
	}
	return (
		<div>
			<input
				type='text'
				placeholder='Search Here'
				onChange={handleChange}
				value={searchInput} />
		</div>
	)
}