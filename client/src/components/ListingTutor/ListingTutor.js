
import React, { Component } from 'react'
import HomeButton from "../HomeButton/HomeButton"
import "./ListingTutor.css";
//import data from "../../data/tutors.js";
import {Link, Redirect} from "react-router-dom";
import TutorInfo from "../TutorInfo/TutorInfo"
import axios from 'axios';
import userData from '../../userData';
import AboutTutor from "../AboutTutor/AboutTutor"

export default class ListingTutor extends Component {

    constructor(props) {
        super(props);
            
        this.state = {
        typedClass: " ",
        // clickedOn: false,
        tutorList : this.props.data,
        classList: this.props.data
        // tutorEmail:""
        
        }
    }

    componentDidMount() {

        // this.getTutors();
        userData.getTutors()
        .then((response)=>{
            let tutorArray = [];
            response.forEach((element)=>{
                tutorArray.push(element);
            });
            this.setState({tutorList: tutorArray});
        })

    }



    // getTutors = async () =>{
    //     let response = await userData.getTutors();
    //     console.log(response);

    //     let tutorArray = [...this.state.tutorList];
    //     response.forEach((element)=>{
    //         tutorArray.push(element);
    //     })

    //     console.log(tutorArray);
    //     this.setState({tutorList: tutorArray});
    //     console.log(this.state.tutorList);
    // }


    clickedOn = (element) => {
        console.log(element);
        
        // this.setState({clickedOn:true})
        this.props.updateTutor(element);
        this.props.history.push('/AboutTutor');
    }

    onClassChange = async (event) =>{

        this.setState({typedClass: event.target.value})
        let array = [];
        array = await this.state.tutorList.filter(function(item){
            let isValid = false;
            item.classes.forEach((oneClass) =>{
                if(oneClass.includes(event.target.value)){
                    isValid = true;
                    return isValid;
                }
            })
            return isValid;
        })

        this.setState({classList : array});
    }

    renderTutor = (element) => {

            
            return(
                <button onClick={this.clickedOn.bind(this,element)}>
                <li key ={element.email}>
                    {console.log(element.name)}
                    <ul>
                       <li>{element.name}</li>
                         <li>${element.price}/hr</li>
                         <li>{element.classes}</li>  {/*TODO: RENDER LIST OF CLASSES */}
                     </ul>

                </li>
                </button>
            )
    //     this.state.tutorsList.map(tutor => {
    //     // {console.log(classList)}
    //     return (
    //         <Link> <button className = "buttons" onClick = {this.clickedOn(tutor.email)}>
    //                 <ul>
    //                 <li>{tutor.name}</li>
    //                 <li>${tutor.price}/hr</li>
    //                 <li>{tutor.classes}</li>
    //                 </ul>
    //             </button>
    //             </Link>
    //         )
    //     })
    }

    render() {
        //console.log(this.props.data)
        
            // .filter(classes => {
            //     return classes.name === "Jane Smith"
            // })   
 
    return (
            <div>
                <HomeButton/>
                <label>
                    Search by Class:
                <input type="text"
                        placeholder = "Class Code"
                        onChange={this.onClassChange}
                        />
                        </label>
                {console.log(this.state.classList)}
                {this.state.classList.map((element)=> {return this.renderTutor(element)})}
            </div>
        )
    }

        // if(this.state.clickedOn){
        //     return (
        //         <TutorInfo/>
        //     )
        // }
}

