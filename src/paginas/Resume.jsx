import React from "react";
import { Link } from "react-router-dom";
import { studies, experiences } from "../data/resume"

function DataResume () {
    return (
        <>
        <nav>
            <div>
            <Link to="/">Home </Link>
            </div>                
            <div>
            <Link to="/projects"> Proyectos</Link>
            </div>            
        </nav>
        <h1>Curriculum</h1>
        <h2>Formación</h2>
        <ul>
            {studies.map((study) => 
                <li key={study.id}>
                    <h3>{study.title}</h3>
                    <p>{study.institution}</p>
                    <p>{study.date}</p>
                </li>
            )}
        </ul>

        <h2>Experiencia Laboral</h2>
        <ul>
            {experiences.map((experience) =>
            <li key={experience.id}>
                <h3>{experience.title}</h3>
                <p>{experience.company}</p>
                <p>{experience.date}</p>
                
            </li>
            )}
        </ul>
        
        </>
    )
}

export default DataResume;