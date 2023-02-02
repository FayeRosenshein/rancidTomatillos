import React from 'react';

// import fetchData from '../../ApiCalls';
import './MovieCard.css';

export default function MovieCard(props) {
console.log("card", props)
  
    return (
      <div >
      <img src={props.image} alt={props.title}/>
      <p>{props.title}</p>
    </div>
    )
  

 
}