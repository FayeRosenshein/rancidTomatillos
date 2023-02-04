import React from 'react';
import './MovieCard.css';

export default function MovieCard({ id, image, title, setMovieId }) {


  function handleClick() {
    setMovieId(id)
  }
  
    return (
      <div onClick={handleClick} id={id} className='movie-card'>
        <img src={image} alt={title} width={150} />
        <p>{title}</p>
      </div>
    )
  

 
}