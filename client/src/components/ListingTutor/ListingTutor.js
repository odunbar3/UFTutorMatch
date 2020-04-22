
import React, { Component } from 'react'
import HomeButton from "../HomeButton/HomeButton"
import "./ListingTutor.css";
//import data from "../../data/tutors.js";
import {Link} from "react-router-dom";
import TutorInfo from "../TutorInfo/TutorInfo"

export default class ListingTutor extends Component {

constructor(props) {
    super(props);
        
    this.state = {
    typedClass: " ",
    clickedOn: false,
    tutor:{}
    }
}

clickedOn = (theEmail) => {
    //this.setState({clickedOn:true})

    }

    render() {

    var typedClass = this.state.typedClass
    var classList = this.props.data
    .filter(classes => {
        var test = classes.classes.filter(function(classi) {
            return classi.toLowerCase().indexOf(typedClass.toLowerCase()) >= 0
        });
        var isValid = false
        if (test[0])
        {
            isValid = true
        }
        return isValid;
    });

    const tutorsList = classList.map(tutor => {
        return (
           <Link> <button className = "buttons" onClick = {this.clickedOn(tutor.email)}>
                <ul>
                <li>{tutor.name}</li>
                <li>${tutor.price}/hr</li>
                <li>{tutor.classes}</li>
                </ul>
             </button>
             </Link>
        )
    })
    
    return (
            <div>
                <HomeButton/>
                <label>
                    Search by Class:
                <input type="text"
                        placeholder = "Class Code"
                        onChange={event => this.setState({typedClass: event.target.value})}
                        />
                        </label>
                {tutorsList}
            </div>
        )

        if(this.state.clickedOn){
            return (
                <TutorInfo/>
            )
        }
    }
}

