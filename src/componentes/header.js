import React from 'react';
import { Link } from "react-router-dom";
import './header.css'

const header = () => {
    return (
        <header className='header'>
            <h1>My App</h1>
            <div className="link">
                <li><Link to="/">Inicio</Link> </li>
                <li><Link to="/buscar">Buscar</Link> </li>
                <li><Link to="">Go</Link> </li>
            </div>
        </header>
    )
}
export default header