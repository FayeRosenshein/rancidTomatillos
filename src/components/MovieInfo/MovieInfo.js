import React from 'react';
import './MovieInfo.css'

export default function MovieInfo({singleMovie, setSingleMovie}) {

  function handleClick() {
    setSingleMovie('')
  }

  return (
    <section className='single-movie'>
      <button onClick={handleClick}>Home</button>
      <img src={singleMovie.poster_path}alt={singleMovie.title} width={300}/>
      <p>{singleMovie.title}</p>
      <p>Release date: {singleMovie.release_date}</p>
      <p>Plot: {singleMovie.overview}</p>
      <p>Genre: {singleMovie.genres}</p>
      <p>Movie Budget: {singleMovie.budget}</p>
      <p>Average rating: {singleMovie.average_rating}</p>
    </section>
  )
	}