import React from 'react';
import MovieCard from "../MovieCard/MovieCard";
// import { fetchAllMovies } from '../../ApiCalls';
import './AllMovies.css';

export default function AllMovies(props) {
  // const [allMovies, setAllMovies] = React.useState([])
  

  // React.useEffect(() => {
  //   fetchAllMovies()
  //   .then(data => setAllMovies(data.movies))
  //   .catch(err => console.log(err))
  // }, [])

  
  const allMovieCards = props.map(movie => {
    console.log(props)
   return (
   <MovieCard 
   setSingleMovieId={props.setSingleMovieId}
   key={movie.id}
   id={movie.id}
   image={movie.backdrop_path}
   title={movie.title}
   />
   ) 
  })


  return (
    <section>
      <p>All Movies</p>
      <div>
        {allMovieCards}
      </div>
    </section>
  )
}