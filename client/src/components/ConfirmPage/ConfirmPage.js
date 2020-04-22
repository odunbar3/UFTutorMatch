import React, { Component } from 'react'
import "./ConfirmPage.css";
import HomeButton from "../HomeButton/HomeButton"

export default class ConfirmPage extends Component {
    render() {
        return (
            <div className = "App-header">
                <h2>All done! Please check your email for confirmation</h2>
                <HomeButton/>
            </div>
        )
    }
}
