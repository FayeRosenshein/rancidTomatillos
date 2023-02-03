import React from 'react';
import './MovieCard.css';

export default function MovieCard(props) {
// console.log("card", props)
  
    return (
      <div id={props.id}>
        <img src={props.image} alt={props.title} width={150} />
        <p>{props.title}</p>
      </div>
    )
  

 
}