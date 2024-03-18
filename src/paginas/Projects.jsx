import React from "react";
import projects from "../data/projects";
import { Link } from "react-router-dom";


function ProjectsData (){
    return (
        <>
        <nav>
            <div>
            <Link to={"/"}>Home </Link>
            </div>                
            <div>
            <Link to={"/resume"}> Formación y experiencia laboral</Link>
            </div>            
        </nav>
        <h2>Proyectos</h2>
        <ul>
            {projects.map((project) =>
            <li key={project.id}>
                <h3>{project.name}</h3>
                <img src={project.image} alt={`Imagen de ${project.name}`}/> 
                <p>{project.description}</p>
                <a href={project.url}>Ver mas</a>
            </li>
            )}
        </ul>
        
        </>
    )
}

export default ProjectsData;