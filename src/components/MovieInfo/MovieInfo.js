import React from 'react';
import { redirect, useNavigate, useParams } from 'react-router-dom';
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
	}, [id])

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