import React from 'react';
import './MovieCard.css';

export default function MovieCard({ id, image, title}) {


  // function handleClick(id) {
  //   setMovieId(id)
  // }
  
    return (
      <div  id={id} className='movie-card'>
        <img src={image} alt={title} width={150} />
        <p>{title}</p>
      </div>
    )
  

 
}