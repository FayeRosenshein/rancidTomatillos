import React from 'react';
import './MovieInfo.css'

export default function MovieInfo({singleMovie, setSingleMovie}) {

  function handleClick() {
    setSingleMovie('')
  }

  return (
    <section>
      <button onClick={handleClick}>Home</button>
      <img src={singleMovie.poster_path}alt={singleMovie.title}/>
      <p>{singleMovie.title}</p>
      <p>{singleMovie.release_date}</p>
      <p>{singleMovie.overview}</p>
      <p>{singleMovie.genres}</p>
      <p>{singleMovie.budget}</p>
      <p>{singleMovie.average_rating}</p>
    </section>
  )

}