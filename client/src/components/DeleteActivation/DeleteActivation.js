import React, { Component } from 'react'
import "./DeleteActivation.css";
import HomeButton from "../HomeButton/HomeButton"
import userData from "../../userData"

export default class DeleteActivation extends Component {
    componentDidMount(){
        console.log(this.props.location.pathname);
        userData.activateDeletion(this.props.location.pathname);

    }
    render() {
        return (
            <div className = "App-header">
                <h1 className = "activation">Thank you for deleting your post!</h1>
                <h1>Your post will no longer show up in the tutor list</h1>
                <HomeButton/>
            </div>
        )
    }
}
