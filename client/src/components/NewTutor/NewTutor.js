import React from 'react'
//import {Link} from "react-router-dom";
import "./NewTutor.css";
import HomeButton from "../HomeButton/HomeButton"
import data from "../../data/tutors.js";
class NewTutor extends React.Component {
    
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
    theData : data
}


handleSubmit = (event) => {
    event.preventDefault();
    // AXIOS CALL HERE

    var classesArray = this.state.classes.split(" ");
    
    var newTutor = {
        name: this.state.name,
        email:this.state.email,
        availability:this.state.availability,
        price:this.state.price,
        classes : classesArray,
        comments : this.state.comments,
        confirmed : false,
        deleteConfirmed : false,
        update: false,

    }
    
    var updatedData = this.state.theData.concat([newTutor])
    this.setState({theData: updatedData});
    console.log(newTutor);
    console.log(this.state.theData);
    

}

render(){
    return (
        <div>

            <HomeButton/>

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
                <input className = "submit" type="submit" value="Submit" />
                </label>
                </form>
        </div>
        )
    }
}

export default NewTutor