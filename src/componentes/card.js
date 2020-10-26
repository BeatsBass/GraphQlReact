import React from 'react'
import './card.css'

function Card(props) {
	if (props.ele !== undefined) {
		return(
			<div className="card">
                <div className="card-img">
                    <img src={props.ele.image} loading="lazy" alt=""/>
                </div>
                <div className="card-body">
                    <h5>{props.ele.artist}</h5>
                    <p>{props.ele.title}</p>
                    <a href={props.ele.link}>Download</a>
                </div>
            </div>
		)
	}
	else {
		return null
	}
}

export default Card
