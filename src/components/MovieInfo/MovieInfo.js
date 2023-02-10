import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchSingleMovie } from '../../ApiCalls';
import './MovieInfo.css'

export default function MovieInfo({ setIsLoading, setError }) {
	const [singleMovie, setSingleMovie] = React.useState({})
	const navigate = useNavigate()

	let { id } = useParams();

	React.useEffect(() => {
		setIsLoading(true)
		fetchSingleMovie(id)
			.then(data => setSingleMovie(data.movie))
			.catch(error => {
				setError(error)
			})
			.finally(() => setIsLoading(false))
			// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id])

	return (
		<section className='single-movie-info'>
			<button onClick={() => navigate("/")}>Home</button>
			<img src={singleMovie.poster_path} alt={singleMovie.title} width={300} />
			<p>Title: {singleMovie.title}</p>
			<p>Release Date: {singleMovie.release_date}</p>
			<p>Summary: {singleMovie.overview}</p>
			<p>Genres: {singleMovie.genres}</p>
			<p>Budget: ${singleMovie.budget}</p>
			<p>Revenue: ${singleMovie.revenue}</p>
			<p>Average Rating: {singleMovie.average_rating}</p>
		</section>
	)

}
