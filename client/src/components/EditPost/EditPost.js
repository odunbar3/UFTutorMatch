import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class EditPost extends Component {

info = this.props.filledOut;
    state = {
        name:"",
        email:"",
        availability:"",
        price: "",
        comments: "",
        classes: "",
        confirmed: false,
        deleteConfirmed: false,
        update: false,
    
        isSubmit: false
    }

    render() {
        return (
    <div>
        <h1>{this.info.name}</h1>
            <form onSubmit={this.handleSubmit}>
            <ul>
                <li>
            <label>
                Name:
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
                Email:
                <input type="text"
                placeholder="Email"
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
                placeholder="Availability"
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
                placeholder="Price"
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
                placeholder="Classes"
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
                placeholder="Comments"
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
