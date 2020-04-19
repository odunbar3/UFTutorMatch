
import React, { Component } from 'react'
import HomeButton from "../HomeButton/HomeButton"
import "./ListingTutor.css";
import data from "../../data/tutors.js";
import {Link} from "react-router-dom";

export default class ListingTutor extends Component {

render() {

    var typedClass = ""

    const classList = data
    .filter(classes => {
        console.log(classes.name)
        var test = classes.classes.filter(function(classi) {
            console.log(classi)
            return classi.toLowerCase().indexOf(typedClass.toLowerCase()) >= 0
        });
        console.log(test)
        var isValid = false
        if (test[0])
        {
            isValid = true
        }
        console.log(isValid)
        return isValid;
    });

    const tutorsList = classList.map(tutor => {
        return (
            <Link className = "buttons">
                <ul>
                <li>{tutor.name}</li>
                <li>${tutor.price}/hr</li>
                <li>{tutor.classes}</li>
                </ul>
             </Link>
        )
    })
        
    console.log("Filtered class list:")
    console.log(classList)
    
    return (
            <div>
                <HomeButton/>
                {tutorsList}
            </div>
        )
    }
}

