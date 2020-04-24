
import React, { Component } from 'react'
import HomeButton from "../HomeButton/HomeButton"
import "./ListingTutor.css";
//import data from "../../data/tutors.js";
import {Link} from "react-router-dom";
import TutorInfo from "../TutorInfo/TutorInfo"
import axios from 'axios';

export default class ListingTutor extends Component {

constructor(props) {
    super(props);
        
    this.state = {
    typedClass: " ",
    clickedOn: false,
    tutorList : {},
    tutor:{}
    
    }
}



componentWillMount() {

    axios.get(`http://localhost:5000/tutors/list`)
        .then(res => {
            console.log(res.data);
            this.setState({tutorList: res.data})
        })

}


clickedOn = (theEmail) => {
    this.setState({clickedOn:true})

    }

    render() {
    var typedClass = this.state.typedClass
    console.log(this.state.tutorList)
    console.log(this.props.data)
    console.log(this.state.tutorList.tutors
        .filter(classes => {
            return classes.name === "Jane Smith"
        })
    )
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
        {console.log(classList)}
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

