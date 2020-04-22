import React, { Component } from 'react'
import {Link} from "react-router-dom";
import HomeButton from "../HomeButton/HomeButton"
import ConfirmPage from "../ConfirmPage/ConfirmPage"

export default class EditPost extends Component {

    info = this.props.filledOut
    constructor(props) {
        super(props);
            
        this.state = {
        name:"",
        email:"",
        availability:"",
        price: "",
        comments: "",
        classes: "",
    
        isSubmit: false
    }
}
    componentDidMount()
    {
        var data = this.props.data
        var email = this.props.filledOut.email
        var tutor = data.filter(data => data.email === email)
        if (tutor != null)
        {
            this.setState({
                name: tutor.name,
                email: tutor.email,
                availability: tutor.availability,
                price: tutor.price,
                comments: tutor.comments,
                classes: tutor.classes
            },
            () => {
                console.log(this.state);
            }
            )
        }
    }

    render() {
        return (
    <div>
        <HomeButton/>
        <h1>Hello, {this.info.name}</h1>
            <form onSubmit={this.handleSubmit}>
            <ul>
                <li>
            <label>
                Name:
                <input type="text"
                placeholder="Jeff Jones"
                //value={this.state.name} 
                defaultValue = {this.state.name}
                onChange={event => this.setState({name: event.target.value})}
                required 
                />
            </label>
            </li>
            <li>
            <label>
                Email:
                <input type="text"
                placeholder="jeffjones@email.com"
                //value={this.state.email} 
                defaultValue = {this.state.email}
                onChange={event => this.setState({email: event.target.value})} 
                required
                />
            </label>
            </li>
            <li>
            <label>
                Availability:
                <input type="text"
                placeholder="Sunday 8-6"
                value={this.state.availability} 
                defaultValue = {this.state.availability}
                onChange={event => this.setState({availability: event.target.value})} 
                required
                />
            </label>
            </li>
            <li>
            <label>
                Price:
                <input type="text"
                placeholder="10"
                //value={this.state.price} 
                defaultValue = {this.state.price}
                onChange={event => this.setState({price: event.target.value})} 
                required
                />
            </label>
            </li>
            <li>
            <label>
                Classes:
                <input type="text"
                placeholder="STA2023, STA3024, STA4322"
                //value={this.state.classes} 
                defaultValue = {this.state.classes}
                onChange={event => this.setState({classes: event.target.value})} 
                required
                />
            </label>
            </li>
            <li>
            <label>
                Comments:
                <input type="text"
                placeholder="I know engineering"
                //value={this.state.comments}
                defaultValue = {this.state.comments}
                onChange={event => this.setState({comments: event.target.value})} 
                />
            </label>
            </li>
            </ul>
        <label>
        <Link to = "/ConfirmPage" ><button className = "buttons" type="submit" value="Submit">Update</button></Link>
        </label>
        </form>
    </div>
        )
    }
}
