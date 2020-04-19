import React from 'react'
import {Link} from "react-router-dom";
import "./HomeButton.css";

export default function Header() {
    return (
        <div > 
            <Link className = "backHome" to = "/Home">Back to Home</Link>
        </div>
    )
}
