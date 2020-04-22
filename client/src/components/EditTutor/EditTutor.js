//import {Link} from "react-router-dom";
import "./EditTutor.css";
import HomeButton from "../HomeButton/HomeButton"
import EditPost from "../EditPost/EditPost"
import React, { Component } from 'react'
//import data from "../../data/tutors.js";

export default class EditTutor extends Component {
    state = {
        name: "",
        email:"",
        isSubmit: false
    }
    
    
    handleSubmit = (event) => {
        this.setState({isSubmit:true});
        }


 render() {

        if (this.state.isSubmit) {
            return(
            <EditPost 
                filledOut = {this.state}
            />
            )
        }
    
        else
        {
    return (
            <div>
                <HomeButton/>

<form onSubmit={this.handleSubmit}>
    <ul>
        <li>
    <label>
        Your Name:
        <input type="text"
        placeholder="Name"
        value={this.state.name} 
        onChange={event => this.setState({name: event.target.value})}
        required 
        />
    </label>
    </li>
    <li>
    <label>
        Your Email:
        <input type="text"
        placeholder="Email"
        value={this.state.email} 
        onChange={event => this.setState({email: event.target.value})} 
        required
        />
    </label>
    </li>
    </ul>
<label>
<button className = "buttons" type="submit" value="Submit">Look Up</button>
</label>
</form>
            </div>
        )
    
    }
}
}
