import React from 'react';

// import fetchData from '../../ApiCalls';
import './MovieCard.css';

export default function MovieCard(props) {
console.log("card", props)
  
    return (
      <div className='movie-card'>
      <img src={props.image} alt={props.title} width={150} />
      <p>{props.title}</p>
    </div>
    )
  

 
}