import React from 'react'
//import {Link} from "react-router-dom";
import "./NewTutor.css";
import HomeButton from "../HomeButton/HomeButton"
import data from "../../data/tutors.js";
class NewTutor extends React.Component {
    
state = {
    id:'',
    code: '',
    coordinates: '',
    address:'',
    
    name:'',
    email:'',
    availability:'',
    price: '',
    comments: '',
    classes: '',
    confirmed: false,
    deleteConfirmed: false,
    update: false
}

handleSubmit = (event) => {
    event.preventDefault();
    //AXIOS CALL HERE
    

}

render(){
    return (
        <div>

            <HomeButton/>

                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text"
                        placeholder="Name"
                        value={this.state.name} 
                        onChange={event => this.setState({name: event.target.value})}
                        required 
                        />
                    </label>
                    <label>
                        Email:
                        <input type="text"
                        placeholder="Email"
                        value={this.state.email} 
                        onChange={event => this.setState({email: event.target.value})} 
                        required
                        />
                    </label>
                    <label>
                        Availability:
                        <input type="text"
                        placeholder="Availability"
                        value={this.state.availability} 
                        onChange={event => this.setState({availability: event.target.value})} 
                        required
                        />
                    </label>
                    <label>
                        Price:
                        <input type="text"
                        placeholder="Price"
                        value={this.state.price} 
                        onChange={event => this.setState({price: event.target.value})} 
                        />
                    </label>
                    <label>
                        Classes:
                        <input type="text"
                        placeholder="Classes"
                        value={this.state.classes} 
                        onChange={event => this.setState({classes: event.target.value})} 
                        />
                    </label>
                    <label>
                        Comments:
                        <input type="text"
                        placeholder="Comments"
                        value={this.state.comments} 
                        onChange={event => this.setState({comments: event.target.value})} 
                        />
                    </label>
                
                <input type="submit" value="Submit" />
                </form>
        </div>
        )
    }
}

export default NewTutor