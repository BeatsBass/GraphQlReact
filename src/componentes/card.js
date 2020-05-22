import React from 'react'
import './card.css'

function Card(props){
	alert(props.kk)
	return (
		<div className='card'>
		<div className='card-img'>
		<img src={props.data.image} alt="holla"/>
		</div>
		</div>

		<div className='card-body'>
		<p>{props.data.title}</p>
		<a href={props.data.link}>Link</a>
		<p>{props.data.year}</p>
		</div>
	)
}

export default Card
