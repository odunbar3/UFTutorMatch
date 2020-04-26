import React, { Component } from 'react'
import { Route, Switch, Redirect  } from 'react-router-dom';
import Student from "./components/Student/Student";
import Tutor from "./components/Tutor/Tutor";
import ListingTutor from "./components/ListingTutor/ListingTutor";
import LeavingReview from "./components/LeavingReview/LeavingReview";
import NewTutor from "./components/NewTutor/NewTutor";
import EditTutor from "./components/EditTutor/EditTutor";
import ConfirmPage from "./components/ConfirmPage/ConfirmPage";
import Home from "./views/Home/Home";
import userData from "./userData";
import AboutTutor from "./components/AboutTutor/AboutTutor"


class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      data: [],
      tutorEmail: ""
    }
  }

  updateData = () => {
    this.setState({ data:userData.getTutors() });
  }

  updateTutorEmail = (email)=>{
    this.setState({tutorEmail: email});
    console.log(this.state.tutorEmail);
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
        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Student" component = {Student}/>
          <Route exact path = "/Tutor" component = {() =><Tutor tutorEmail={this.state.tutorEmail}/>}/>
          <Route exact path = "/ListingTutor" 
            component={() => 
            <ListingTutor 
              data={this.state.data}
              tutorEmail = {this.state.tutorEmail}
              updateTutorEmail={this.updateTutorEmail} 
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
          <Route exact path = "/EditTutor"
            component={() => 
              <EditTutor 
                data={this.state.data} 
                updateData = {this.updateData.bind(this)} 
              />}
          />
          <Route exact path = "/ConfirmPage" component = {ConfirmPage}/>
          <Route exact path = "/AboutTutor" component = {AboutTutor}/>
          <Route exact path="/">
            <Redirect to="/Home" />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
