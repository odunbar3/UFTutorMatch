import React from 'react';
import './Home.css';
import {Link} from "react-router-dom";
function Home() {
    return (
        <div className="App-header">
            <h1 className = "heading">Welcome to UF Tutor Match</h1>
            <h2 className = "heading2">Are you a ...</h2>
            <Link to = "/Student" className = "buttons">Student</Link>
            <Link to = "/Tutor" className = "buttons">Tutor</Link>
        </div>
    );
}

export default Home;
