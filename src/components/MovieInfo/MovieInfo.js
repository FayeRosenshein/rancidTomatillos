import React from 'react';
// import { fetchSingleMovie } from '../../ApiCalls';
// import MovieCard from '../MovieCard/MovieCard';
import './MovieInfo.css'

export default function MovieInfo(prop) {
  // const [singleMovie, setSingleMovie] = React.useState({})
  // const [singleMovieId, setSingleMovieId] = React.useState('')

  // React.useEffect(() => {
  //   fetchSingleMovie(singleMovieId)
  //   .then(data => setSingleMovie(data))
  //   .catch(error => console.log(error))
  // }, [])

  

  return (
    <section>
      <img src={prop.poster_path}alt={prop.title}/>
      <p>{prop.title}</p>
      <p>{prop.release_date}</p>
      <p>{prop.overview}</p>
      <p>{prop.genres}</p>
      <p>{prop.budget}</p>
      <p>{prop.average_rating}</p>
    </section>
  )
}