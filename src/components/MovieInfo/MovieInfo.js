import React from 'react';
import './MovieInfo.css'

export default function MovieInfo({singleMovie}) {



  return (
    <section>
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