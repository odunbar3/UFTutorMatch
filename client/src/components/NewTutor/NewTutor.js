import React, { Component } from 'react'
import "./NewTutor.css";
import HomeButton from "../HomeButton/HomeButton"
import ConfirmPage from "../ConfirmPage/ConfirmPage"
import {Link,withRouter} from "react-router-dom"
import userData from '../../userData';
//import data from "../../data/tutors.js";

export default class NewTutor extends React.Component {

constructor(props) {
    super(props);
    
    this.state = {
        name:"",
        email:"",
        availability:"",
        price: "",
        comments: "",
        classes: "",
        theData: this.props.data,
        isSubmit: false
    };
} 


handleSubmit = (event) => {
    event.preventDefault();
    
    // this.props.updateData(this.state.theData.concat([newTutor]));

    //CODE TO CONSTRUCT NEW TUTOR OBJECT HERE
    var classesArray = this.state.classes.split(" ");
    
    var newTutor = {
        name: this.state.name,
        email:this.state.email,
        availability:this.state.availability,
        price:this.state.price,
        comments : this.state.comments,
        classes : classesArray
    }

    //AXIOS CALL TO PUT NEW TUTOR HERE
    userData.createTutorPost(newTutor)
    .then((response) => {
        if (response.created === false)
        {
            this.setState({isSubmit:false})
            alert("That email is already associated with a post");
            //Print error messages here
            {console.log(response.errors)}
            {console.log("An error has occured in newTutor")}
        } 

        else
        {
            this.setState({isSubmit:true})
        }

    })
    




}

render(){
    if (this.state.isSubmit) {
        return (
            <ConfirmPage status = "adding" isWhat = "post"/>
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
                        <label >
                            Name:
                            <input className = "inputs"
                            type="text"
                            placeholder="First and Last"
                            value={this.state.name} 
                            onChange={event => this.setState({name: event.target.value})}
                            required 
                            />
                        </label>
                    </li>
                    <li>
                        <label >
                            Email:   
                            <input className = "inputs"
                            type="text"
                            placeholder="example@email.com"
                            value={this.state.email} 
                            onChange={event => this.setState({email: event.target.value})} 
                            required
                            />
                        </label>
                    </li>
                    <li>
                        <label>
                            Availability:
                            <input type="text"
                            placeholder="Days and Times"
                            value={this.state.availability} 
                            onChange={event => this.setState({availability: event.target.value})} 
                            required
                            />
                        </label>
                    </li>
                    <li>
                        <label>
                            Price:
                            <input type="text"
                            placeholder="$"
                            value={this.state.price} 
                            onChange={event => this.setState({price: event.target.value})} 
                            required
                            />
                        </label>
                    </li>
                    <li>
                        <label>
                            Classes:
                            <input type="text"
                            placeholder="Class Codes"
                            value={this.state.classes} 
                            onChange={event => this.setState({classes: event.target.value})} 
                            required
                            />
                        </label>
                    </li>
                    <li>
                        <label>
                            Comments:
                            <input type="text"
                            placeholder="Extra info for students"
                            value={this.state.comments} 
                            onChange={event => this.setState({comments: event.target.value})} 
                            />
                        </label>
                    </li>
                </ul>
                <label>
                    <button className = "buttons" type="submit" value="Submit">Submit</button>
                </label>
            </form>
        </div>
        )
    }
    }

}
