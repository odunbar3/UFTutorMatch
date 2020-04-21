import React from 'react'
import {Link} from "react-router-dom";
import "./Tutor.css";
import HomeButton from "../HomeButton/HomeButton"

export default function Tutor() {
    return (
        <div className="App-header">
            <HomeButton/>
            <h2 className = "heading2">Are you...</h2>
            <Link to = "/NewTutor" className = "buttons">Wanting to Tutor</Link>
            <Link to = "/EditTutor" className = "buttons">Manage a Tutor Listing</Link>
        </div>
    )
}
