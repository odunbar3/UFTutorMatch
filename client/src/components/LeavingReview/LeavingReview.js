import React, { Component } from 'react'
import HomeButton from "../HomeButton/HomeButton"
import FillReview from "../FillReview/FillReview"
import userData from "../../userData"
import "./LeavingReview.css"
import axios from 'axios'

export default class LeavingReview extends Component {
    state = {
        tutorName: "",
        tutorEmail:"",
        name:"",
        email:"",
        isSubmit: false
    }
    
    
    handleSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.post('/tutors/find', {email:this.state.tutorEmail});
        if(response.data.error){
            alert("No tutor with that email");
            this.setState({isSubmit: false});
        }else{
            this.setState({isSubmit:true});
        }
    }
    
        render() {
            if (this.state.isSubmit) {
                return(
                <FillReview 
                    filledOut = {this.state}
                    //data = {this.props.data}
                    
                />
                )
            }
        return (
            <div>
                <HomeButton/>

<form onSubmit={this.handleSubmit}>
    <ul>
        <li>
    <label>
        Tutor's Name:
        <input type="text"
        placeholder="Name"
        value={this.state.tutorName} 
        onChange={event => this.setState({tutorName: event.target.value})}
        required 
        />
    </label>
    </li>
    <li>
    <label>
        Tutor's Email:
        <input type="text"
        placeholder="Email"
        value={this.state.tutorEmail} 
        onChange={event => this.setState({tutorEmail: event.target.value})} 
        required
        />
    </label>
    </li>
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


