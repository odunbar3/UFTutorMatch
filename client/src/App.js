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



class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
    data: this.props.listing
    }
  }

  updateData = (newData) => {
  this.setState({ data:newData });
}


  render(){
    return (
      <div>
        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Student" component = {Student}/>
          <Route exact path = "/Tutor" component = {Tutor}/>
          <Route exact path = "/ListingTutor" 
            component={() => 
            <ListingTutor 
              data={this.state.data} 
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
          <Route exact path="/">
            <Redirect to="/Home" />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
