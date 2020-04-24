import React, { Component } from 'react'
import HomeButton from "../HomeButton/HomeButton"
import ConfirmPage from "../ConfirmPage/ConfirmPage"

export default class FillReview extends Component {
    state = {
        rating: 0,
        thingsYouLiked:"",
        comments:"",
        isSubmit: false
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({isSubmit:true})
    }
    
    render() {
        if (this.state.isSubmit) {
            return (
                <ConfirmPage status = "adding" isWhat = "review"/>
            )
        }
        return (
                <div>
                    <HomeButton/>
                    <h1>You,{this.props.filledOut.name}, are reviewing: {this.props.filledOut.tutorName}</h1>
                    <form onSubmit={this.handleSubmit}>
                        <ul>
                            <li>
                                <label>
                                    Your Rating(0-5):
                                    <input type="number"
                                    placeholder="Rating"
                                    value={this.state.rating} 
                                    onChange={event => this.setState({rating: event.target.value})}
                                    required 
                                    />
                                </label>
                            </li>
                            <li>
                                <label>
                                    Things You Liked:
                                    <input type="text"
                                    placeholder="What did you Like?"
                                    value={this.state.thingsYouLiked} 
                                    onChange={event => this.setState({thingsYouLiked: event.target.value})} 
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
                                    required
                                    />
                                </label>
                            </li>
                        </ul>
                        <label>
                            <button className = "buttons" type="submit" value="Submit">Look Up</button>
                        </label>
                    </form>
            </div>
        )
    }
}
