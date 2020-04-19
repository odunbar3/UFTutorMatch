import React from 'react'
import {Link} from "react-router-dom";
import "./Student.css";
import HomeButton from "../HomeButton/HomeButton"

export default function Student() {
    return (
        <div className="App-header">
            <HomeButton/>
            <h1 className = "heading">Are you ...</h1>
            <Link to = "/LookingTutor" className = "buttons">Looking for a tutor</Link>
            <Link to = "/LeavingReview" className = "buttons">Leaving a review</Link>
        </div>
    )
}

