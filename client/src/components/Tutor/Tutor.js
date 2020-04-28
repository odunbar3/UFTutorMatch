import React from 'react'
import {Link} from "react-router-dom";
import "./Tutor.css";
import HomeButton from "../HomeButton/HomeButton"

export default function Tutor() {
    return (
        <div className="App-header">
            <HomeButton/>
            <h2 className = "heading2">Do you want to...</h2>
            <Link to = "/NewTutor" className = "buttons">Add A Tutor Post</Link>
            <Link to = "/EditTutor" className = "buttons">Edit Your Tutor Post</Link>
        </div>
    )
}
