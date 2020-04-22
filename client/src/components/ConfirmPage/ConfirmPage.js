import React, { Component } from 'react'
import "./ConfirmPage.css";
import HomeButton from "../HomeButton/HomeButton"

export default class ConfirmPage extends Component {
    render() {
        return (
            <div className = "App-header">
                <h2>All done! Your information has been updated!</h2>
                <HomeButton/>
            </div>
        )
    }
}
