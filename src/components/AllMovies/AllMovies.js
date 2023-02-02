import React from 'react';
import MovieCard from "../MovieCard/MovieCard";
import MovieInfo from "../MovieInfo/MovieInfo";
import movies from "../../movieData";
import './AllMovies.css';

export default function AllMovies() {
  
  const moviesCards = movies.map(movie => {
    console.log(movie)
   return (
   <MovieCard 
   image={movie.backdrop_path}
   title={movie.title}
   />
   ) 
  })

  return (
    <section>
      <p>All Movies</p>
      <div>
        {moviesCards}
      </div>
    </section>
  )
}