import React, { Component } from 'react'
import { Route, Switch, Redirect,BrowserRouter  } from 'react-router-dom';
import Student from "./components/Student/Student";
import Tutor from "./components/Tutor/Tutor";
import ListingTutor from "./components/ListingTutor/ListingTutor";
import LeavingReview from "./components/LeavingReview/LeavingReview";
import NewTutor from "./components/NewTutor/NewTutor";
import EditTutor from "./components/EditTutor/EditTutor";
import ConfirmPage from "./components/ConfirmPage/ConfirmPage";
import Home from "./views/Home/Home";
import userData from "./userData";
import EditPost from "./components/EditPost/EditPost";
import UpdateActivation from "./components/UpdateActivation/UpdateActivation"
import DeleteActivation from "./components/DeleteActivation/DeleteActivation"
import ReviewActivation from "./components/ReviewActivation/ReviewActivation"

import AboutTutor from "./components/AboutTutor/AboutTutor"
import ActivationPage from "./components/ActivationPage/ActivationPage"


class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      data: [],
      tutor: [],
      reviews: [],
      confirmation:{
        status: "",
        isWhat: ""
      }
    }
  }

  updateData = async (data) => {
    await this.setState({ data:data });
  }

  updateTutor = async (tutor)=>{
    await this.setState({tutor: tutor});
    console.log(this.state.tutor);
    const revs = await userData.getReviews({tutorEmail: this.state.tutor.email});
    this.setState({reviews: revs});
    console.log(this.state.reviews);
  }

  updateConfirmation = async(status, isWhat) =>{
    let con = {
      status: status,
      isWhat: isWhat
    }
    await this.setState({confirmation : con});
    console.log(this.state.confirmation)
  }

  componentDidMount() {

    // this.getTutors();
    userData.getTutors()
    .then((response)=>{
        let tutorArray = [...this.state.data];
        response.forEach((element)=>{
            tutorArray.push(element);
        });
        this.setState({data: tutorArray});
    })

}




  render(){
    return (
      <div>
        <BrowserRouter>
        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Student" component = {Student}/>
          <Route exact path = "/Tutor" component = {() =><Tutor tutor={this.state.tutor}/>}/>
          <Route path = "/ListingTutor" render={props=><ListingTutor {...props}
              data={this.state.data}
              tutor = {this.state.tutor}
              updateTutor={this.updateTutor} 
            />}
          />
          <Route exact path = "/LeavingReview" component = {LeavingReview}/>
          <Route exact path = "/NewTutor"
            component={() => 
              <NewTutor 
                data={this.state.data} 
                updateData = {this.updateData.bind(this)} 
              />}
          />
          <Route exact path = "/EditTutor" render={props=><EditTutor {...props}
                updateTutor={this.updateTutor} 
              />}
          />
          <Route exact path = "/ConfirmPage" render={props=><ConfirmPage isWhat={this.state.confirmation.isWhat} status={this.state.confirmation.status}/>}/>
          <Route exact path ="/EditPost" render={props=><EditPost {...props} tutor={this.state.tutor} confirmation ={this.state.confirmation} updateConfirmation={this.updateConfirmation}/>}/>
          <Route exact path = "/AboutTutor" render={props=><AboutTutor {...props} tutor = {this.state.tutor}/>}/>
          <Route path="/tutors/create/:id" render={props=><ActivationPage {...props} updateData={this.updateData}/>}/>
          <Route path="/tutors/update/:id" render={props=><UpdateActivation {...props} updateData={this.updateData}/>}/>
          <Route path="/tutors/delete/:id" render={props=><DeleteActivation {...props} updateData={this.updateData}/>}/>
          <Route path="/reviews/create/:id" component={ReviewActivation}/>
          <Route exact path="/">
            <Redirect to="/Home" />
          </Route>
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
