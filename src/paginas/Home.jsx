import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
        <h2>Bienvenido al Portafolio</h2>
        <nav>
            <ul>
        <li><Link to="/projects">Proyectos  </Link></li>
        <li><Link to="/resume">   Formación y experiencia laboral</Link></li>
        </ul>
        </nav>
        </>
    )
}
export default Home;