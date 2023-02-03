import React from 'react';
// import MovieInfo from "../MovieInfo/MovieInfo";
import './MovieCard.css';

export default function MovieCard(props) {
  console.log('card', props)


    return (
    <div onClick={props.setSingleMovieId(props.id)}>
      <img id={props.id} src={props.image} alt={props.title}/>
      <p>{props.title}</p>
    </div>
    )
  

 
}