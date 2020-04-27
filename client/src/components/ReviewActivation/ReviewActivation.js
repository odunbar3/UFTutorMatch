import React, { Component } from 'react'
import "./ReviewActivation.css";
import HomeButton from "../HomeButton/HomeButton"
import userData from "../../userData"

export default class ReviewActivation extends Component {
    componentDidMount(){
        console.log(this.props.location.pathname);
        userData.activateReview(this.props.location.pathname);

    }
    render() {
        return (
            <div className = "App-header">
                <h1 className = "activation">Thank you for activating your review!</h1>
                <h1>Your review will now show up.</h1>
                <HomeButton/>
            </div>
        )
    }
}
