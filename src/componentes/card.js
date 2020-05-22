import React from 'react'
import './card.css'

function Card(props) {
	if (props.ele !== undefined) {
		return(
			<ul class="list-unstyled">
			<li class="media">
				<img src={props.ele.image} class="mr-3" alt="..."/>
				<div class="media-body">
				<h5 class="mt-0 mb-1">List-based media object</h5>
				</div>
			</li>
			</ul>
		)
	}
	else {
		return null
	}
}

export default Card
