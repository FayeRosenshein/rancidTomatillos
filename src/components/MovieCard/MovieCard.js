import React from "react"

const Card = ({id, title, backdrop_path}) => {
	return (
		<div className='card'>
			<img src={backdrop_path} alt={title}/>
			<p>{title}</p>
		</div>
	)
}

export default Card