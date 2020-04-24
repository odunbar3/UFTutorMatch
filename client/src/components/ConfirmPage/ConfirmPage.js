import React, { Component } from 'react'
import "./ConfirmPage.css";
import HomeButton from "../HomeButton/HomeButton"

export default class ConfirmPage extends Component {
    render() {
        return (
            <div className = "App-header">
                <h1 className = "confirmation">Thank you for {this.props.status} your {this.props.isWhat}!</h1>
                <h1>Please verify your email before your {this.props.isWhat} becomes visible.</h1>
                <HomeButton/>
            </div>
        )
    }
}
