import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactRoutes from './Routes.jsx'

function App () {
    return (
        <Router>
            <ReactRoutes />
        </Router>
    )
}

export default App;