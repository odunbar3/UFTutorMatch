//import {Link} from "react-router-dom";
import "./EditTutor.css";
import HomeButton from "../HomeButton/HomeButton"
import EditPost from "../EditPost/EditPost"
import React, { Component } from 'react'
import userData from '../../userData';
//import data from "../../data/tutors.js";

export default class EditTutor extends Component {
    constructor(props) {
        super(props);
            
        this.state = {
        name: "",
        email:"",
        isSubmit: false,
        }
    }
    
    handleSubmit = (event) => {
        //AXIOS call to fetch if entered email exists
        //If email exists, set isSubmit to true

        // userData.findTutorPost(this.state.email)
        // .then((response) => {
        //     {console.log(response)} 
        //     if (response.data.error)
        //     {

        //         //Print error messages here
        //         {console.log(response.data.error)}
        //         {console.log("An error has occured in editTutor")}

        //         this.setState({isSubmit:false})
        //     }

        //     else
        //     {
        //         {console.log("Email entered was found")}
        //         {console.log(response.data)}
        //         this.setState({
        //             isSubmit:true
        //         })
        //     }
        // })

        this.setState({isSubmit:true})

    }

    render() {

        if (this.state.isSubmit) {
            return(
            <EditPost 
                filledOut = {this.state}
                //data = {this.props.data}
            />
            )
        }

        else {

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
