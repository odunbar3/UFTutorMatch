import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className="App-header">
            <h1 className = "heading">Welcome to UF Tutor Match</h1>
            <h2 className = "heading2">Are you a ...</h2>
            <a href = "./components/Student.js" className = "buttons">Student</a>
            <a href = "./components/Tutor.js" className = "buttons">Tutor</a>
        </div>
    );
}

export default Home;
