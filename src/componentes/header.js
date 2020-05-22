import React from 'react';
import { Link } from "react-router-dom";
import './header.css'

const header = () => {
    return(
    <header className="main-header">
        <div className="container">
            <h1 className="mh-logo">
                Music GraphQl
        </h1>
            <nav className="main-nav">
                <ul className="main-nav-list">
                    <li>
                        <Link to="/">listar</Link>
                    </li>
                    <li>
                        <Link to="/n">Buuscar</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    )
}
export default header