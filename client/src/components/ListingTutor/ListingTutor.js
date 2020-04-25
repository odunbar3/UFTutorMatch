
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
        classList: this.props.data,
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

        onClassChange = async (event) =>{

            this.setState({typedClass: event.target.value})
            console.log(typeof this.state.tutorList);
            console.log(event.target.value)
            let array = await this.state.tutorList.filter(function(item){
                console.log(typeof item.classes[0]);
                console.log(item);
                console.log(item.classes);
                let isValid = false;
                item.classes.forEach((oneClass) =>{
                    console.log(oneClass);
                    
                    if(oneClass.includes(event.target.value)){
                        isValid = true;
                        return isValid;
                    }
                })
                return isValid;
            })
            console.log(array);

            this.setState({classList : array});
        
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
                <button key ={element.email} className = "buttons" >
                    <ul>
                        {/* {console.log(element.name)} */}
                        {/* <ul> */}
                            <li>{element.name}</li>
                            <li>${element.price}/hr</li>
                            <li>{element.classes}</li>
                        {/* </ul> */}

                    </ul>
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
                {console.log(this.state.tutorList)}
                {this.state.classList.map((element)=> {return this.renderTutor(element)})}
            </div>
        )

        // if(this.state.clickedOn){
        //     return (
        //         <TutorInfo/>
        //     )
        // }
    }
}

