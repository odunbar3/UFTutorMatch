import React, { Component } from 'react'
import "./AboutTutor.css"
import HomeButton from "../HomeButton/HomeButton"
import {Link} from 'react-router-dom'
import ListingTutor from '../ListingTutor/ListingTutor'

export default class AboutTutor extends Component {
    state = {
        name:this.props.tutor.name,
        email:this.props.tutor.email,
        availability:this.props.tutor.availability,
        price:this.props.tutor.price,
        classes:this.props.tutor.classes,
        comments:this.props.tutor.comments
    }

    // componentWillMount() {
    //     //AXIOS CALL to find tutor with this.props.tutorEmail and store info in state above^^

    // } 
    
    render() {
        return (
            <div>
                <HomeButton/>
                <ul className = "theList">
                    

       <li> <label>Name: {this.state.name}</label></li> 
       <li>  <label>Email: {this.state.email}</label></li> 
       <li>  <label>Availability: {this.state.availability}</label></li> 
       <li>  <label>Price: {this.state.price}/hr</label></li> 
       <li>  <label>Classes: {this.state.classes}</label></li> 
       <li>  <label>Comments: {this.state.comments}</label></li> 
        </ul>
            </div>
        )
    }
}
