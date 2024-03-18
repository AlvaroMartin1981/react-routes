import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from  "./paginas/Home";
import Projects from "./paginas/Projects";
import Resume from "./paginas/Resume";


function ReactRoutes () {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
        </Routes>
    )
}

export default ReactRoutes;