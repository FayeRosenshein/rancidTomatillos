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
			.catch(error => setError(error))
			.finally(() => setIsLoading(false))
			// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id])

	return (
		<section className='single-movie-section'>
			<article className='movie-info-card' >
				<img className='movie-info-img' src={singleMovie.poster_path} alt={singleMovie.title} width={300} />
				<div className='movie-details' >
					<p className='movie-info-title' > {singleMovie.title}</p>
					<p className='movie-summary' >{singleMovie.overview}</p>
					<div className='small-movie-info' >
						<p>Release Date <hr/> {singleMovie.release_date}</p>
						<p>Budget <hr/> {`$${Number(singleMovie.budget).toLocaleString()}`}</p>
						<p>Revenue <hr/> {`$${Number(singleMovie.revenue).toLocaleString()}`}</p>
						<p>Average Rating <hr/>{singleMovie.average_rating}</p>
					</div>
					<button className='home-button' onClick={() => navigate("/")}>Home</button>
				</div>
			</article>
		</section>
	)

}
