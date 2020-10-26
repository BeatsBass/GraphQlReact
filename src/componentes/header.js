import React from 'react';
import { Link } from "react-router-dom";
import './header.css'

const header = () => {
    return (
        <header className='header'>
            <h1>My App</h1>
            <div className="link">
                <li><Link to="/listarN">Get Music1</Link> </li>
                <li><Link to="/listarA">Get Music2</Link> </li>
            </div>
        </header>
    )
}
export default header