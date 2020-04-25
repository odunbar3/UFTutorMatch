
import React, { Component } from 'react'
import HomeButton from "../HomeButton/HomeButton"
import "./ListingTutor.css";
//import data from "../../data/tutors.js";
import {Link} from "react-router-dom";
import TutorInfo from "../TutorInfo/TutorInfo"
import axios from 'axios';
import userData from '../../userData';

export default class ListingTutor extends Component {

    constructor(props) {
        super(props);
            
        this.state = {
        typedClass: " ",
        clickedOn: false,
        tutorList : this.props.data,
        classList: [],
        tutor:{}
        
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


    clickedOn = (theEmail) => {
        this.setState({clickedOn:true})

    }

    onClassChange = (event) =>{

        // this.setState({typedClass: event.target.value})
        // this.state.classList.filter(classes => {
        //     var test = classes.classes.filter(function(classi) {
        //         return classi.toLowerCase().indexOf(typedClass.toLowerCase()) >= 0
        //     });
        //     var isValid = false
        //     if (test[0])
        //     {
        //         isValid = true
        //     }
        //     return isValid;
        // });
    }

    renderTutor = (element) => {

            
            return(
                <li key ={element.email}>
                    {console.log(element.name)}
                    <ul>
                       <li>{element.name}</li>
                         <li>${element.price}/hr</li>
                         <li>{element.classes}</li>
                     </ul>

                </li>
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
                {console.log(this.state.tutorList)}
                {this.state.tutorList.map((element)=> {return this.renderTutor(element)})}
            </div>
        )

        // if(this.state.clickedOn){
        //     return (
        //         <TutorInfo/>
        //     )
        // }
    }
}

