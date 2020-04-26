import React, { Component } from 'react'
import {Link} from "react-router-dom";
import HomeButton from "../HomeButton/HomeButton"
import ConfirmPage from "../ConfirmPage/ConfirmPage"
import userData from '../../userData';

export default class EditPost extends Component {

    // info = this.props.filledOut
    constructor(props) {
        super(props);
            
        this.state = {
        name: this.props.tutor.name,
        email:this.props.tutor.email,
        availability:this.props.tutor.availability,
        price: this.props.tutor.price,
        comments: this.props.tutor.comments,
        classes: this.props.tutor.classes,
    
        isSubmit: false
    }
}
    // componentWillMount()
    // {
    //     //AXIOS call to get tutor object from this.props.filledOut.email and store in the state ^^


    // //     var data = this.props.data
    // //     var email = this.props.filledOut.email
    // //     var tutor = data.filter(data => data.email === email)
    // //     if (tutor != null)
    // //     {
    // //         this.setState({
    // //             name: tutor.name,
    // //             email: tutor.email,
    // //             availability: tutor.availability,
    // //             price: tutor.price,
    // //             comments: tutor.comments,
    // //             classes: tutor.classes
    // //         },
    // //         () => {
    // //             console.log(this.state);
    // //         }
    // //         )
    // //     }
    // }

    updateTutor = async (event) => {
        event.preventDefault();

        //CODE TO CONSTRUCT EDIT TUTOR OBJECT HERE
        var classesArray = this.state.classes.split(" ");

        var editedTutor = {
            name: this.state.name,
            email:this.state.email,
            availability:this.state.availability,
            price:this.state.price,
            comments : this.state.comments,
            classes : classesArray
        }

        //AXIOS CALL TO PUT EDIT TUTOR HERE
        const response = await userData.updateTutorPost(editedTutor);
        console.log(response);
        this.props.updateConfirmation("updating", "post")
        this.props.history.push("/ConfirmPage")
        // this.setState({isSubmit:true});
    }

    deleteTutor = async (event) =>{
        event.preventDefault();

        const response = await userData.deleteTutorPost({email:this.state.email});
        console.log(response);
        this.props.updateConfirmation("deleting", "post")
        this.props.history.push("/ConfirmPage")


    }

    render() {
        // if (this.state.isSubmit) {
        //     return (
        //         <ConfirmPage status = "updating" isWhat = "post"/>
        //     )
        // }

        return (
            <div>
                <HomeButton/>

                <h1>Hello, {this.state.name}</h1>
                    
                <form>
                    <ul>
                        <li>
                            <label>
                                Name:
                                <input type="text"
                                placeholder="First and Last"
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
                                placeholder="example@email.com"
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
                                placeholder="Days and Times"
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
                                placeholder="$"
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
                                placeholder="Class codes with spaces in between"
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
                                placeholder="Extra info for students"
                                defaultValue = {this.state.comments}
                                onChange={event => this.setState({comments: event.target.value})} 
                                />
                            </label>
                        </li>
                    </ul>

                    <label>
                        <button className = "buttons" type="button" onClick={this.updateTutor}>Update</button>
                        <button className = "buttons" type="button" onClick={this.deleteTutor}>Delete</button>
                    </label>

                </form>
            </div>
        )
    }
}
