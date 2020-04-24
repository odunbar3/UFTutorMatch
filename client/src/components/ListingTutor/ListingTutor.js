
import React, { Component } from 'react'
import HomeButton from "../HomeButton/HomeButton"
import "./ListingTutor.css";
//import data from "../../data/tutors.js";
import {Link} from "react-router-dom";
import TutorInfo from "../TutorInfo/TutorInfo"
import axios from 'axios';
import userData from "../../userData";

export default class ListingTutor extends Component {

constructor(props) {
    super(props);
        
    this.state = {
        typedClass: ''

    
    }
}



    render() {


        return (
            <div>
                <HomeButton/>
                <label>
                    Search by Class:
                <input type="text"
                        placeholder = "Class Code"
                        onChange={event => this.setState({typedClass: event.target.value})}
                        />
                        </label>
                {}
            </div>
        )
    }
}

// import React, { Component } from 'react'
// import HomeButton from "../HomeButton/HomeButton"
// import "./ListingTutor.css";
// //import data from "../../data/tutors.js";
// import {Link} from "react-router-dom";
// import TutorInfo from "../TutorInfo/TutorInfo"
// import axios from 'axios';
// import userData from "../../userData";

// export default class ListingTutor extends Component {

// constructor(props) {
//     super(props);
        
//     this.state = {
//     typedClass: " ",
//     clickedOn: false,
//     tutorList : {},
//     tutor:{}
    
//     }
// }



// componentWillMount() {

//     this.setState({tutorList : this.props.data});

// }


// clickedOn = (theEmail) => {
//     this.setState({clickedOn:true})

//     }

//     render() {
//     var typedClass = this.state.typedClass
    
//     var classList = this.state.tutorList
//     .then(test => { return test
//         .filter(classes => {
//             var test = classes.classes.filter(function(classi) {
//                 return classi.toLowerCase().indexOf(typedClass.toLowerCase()) >= 0
//             });
//             var isValid = false
//             if (test[0])
//             {
//                 isValid = true
//             }
//             return isValid;
//         });
//     }).catch(error => {
//         console.log("Filtering classList error: ")
//         console.log(error.response.data)
//     })
//     var tutorsList = classList
//     var tutorsList = classList
//     .then(test => { return test
//         .map(tutor => {
//             return (
//                <Link> <button className = "buttons" onClick = {this.clickedOn(tutor.email)}>
//                     <ul>
//                     <li>{tutor.name}</li>
//                     <li>${tutor.price}/hr</li>
//                     <li>{tutor.classes}</li>
//                     </ul>
//                  </button>
//                  </Link>
//             )
//         })
//     })
//     .catch(error => {
//         console.log("Mapping tutorsList error: ")
//         console.log(error.response.data)
//     })
    
//     return (
//             <div>
//                 <HomeButton/>
//                 <label>
//                     Search by Class:
//                 <input type="text"
//                         placeholder = "Class Code"
//                         onChange={event => this.setState({typedClass: event.target.value})}
//                         />
//                         </label>
//                 {this.state.tutorList[0].name}
//             </div>
//         )

//         if(this.state.clickedOn){
//             return (
//                 <TutorInfo/>
//             )
//         }
//     }
// }

