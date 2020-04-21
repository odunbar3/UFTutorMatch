import {Link} from "react-router-dom";
import "./EditTutor.css";
import HomeButton from "../HomeButton/HomeButton"
import React, { Component } from 'react'
import data from "../../data/tutors.js";

export default class EditTutor extends Component {
    state = {
        name:"",
        email:"",
        availability:"",
        price: "",
        comments: "",
        classes: "",
        confirmed: false,
        deleteConfirmed: false,
        update: false,
        theData : data
    }
    
    
    handleSubmit = (event) => {
        event.preventDefault();
        // AXIOS CALL HERE
    
        var classesArray = this.state.classes.split(" ");
        
        var newTutor = {
            name: this.state.name,
            email:this.state.email,
            availability:this.state.availability,
            price:this.state.price,
            classes : classesArray,
            comments : this.state.comments,
            confirmed : false,
            deleteConfirmed : false,
            update: false,
    
        }
        
        var updatedData = this.state.theData.concat([newTutor])
        this.setState({theData: updatedData});
        console.log(newTutor);
        console.log(this.state.theData);
        
    
    }
    render() {
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
<Link  className = "buttons">Look Up</Link>
</label>
</form>
            </div>
        )
    }
}
