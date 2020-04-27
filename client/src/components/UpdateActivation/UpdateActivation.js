import React, { Component } from 'react'
import "./UpdateActivation.css";
import HomeButton from "../HomeButton/HomeButton"
import userData from "../../userData"

export default class UpdateActivation extends Component {
    componentDidMount(){
        console.log(this.props.location.pathname);
        userData.activateUpdates(this.props.location.pathname).then(()=>{
            userData.getTutors()
            .then((response)=>{
            let tutorArray = [];
            response.forEach((element)=>{
                tutorArray.push(element);
            });
            console.log(tutorArray);
            this.props.updateData(tutorArray);
        })
        })
        

    }
    render() {
        return (
            <div className = "App-header">
                <h1 className = "activation">Thank you for updating your post!</h1>
                <h1>Your updates will now show up in the tutor list</h1>
                <HomeButton/>
            </div>
        )
    }
}
