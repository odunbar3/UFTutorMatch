import React, { Component } from 'react'
import "./ActivationPage.css";
import HomeButton from "../HomeButton/HomeButton"
import userData from "../../userData"

export default class ActivationPage extends Component {
    componentDidMount(){
        console.log(this.props.location.pathname);
        userData.activatePost(this.props.location.pathname);
        userData.getTutors()
        .then((response)=>{
        let tutorArray = [];
        response.forEach((element)=>{
            tutorArray.push(element);
        });
        this.props.updateData(tutorArray);
    })

    }
    render() {
        return (
            <div className = "App-header">
                <h1 className = "activation">Thank you for activating your post!</h1>
                <h1>Your post will now show up in the tutor list</h1>
                <HomeButton/>
            </div>
        )
    }
}
