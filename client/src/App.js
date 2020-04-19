import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Student from "./components/Student/Student";
import Tutor from "./components/Tutor/Tutor";
import LookingTutor from "./components/ListingTutor/ListingTutor";
import LeavingReview from "./components/LeavingReview/LeavingReview";
import NewTutor from "./components/NewTutor/NewTutor";
import EditTutor from "./components/EditTutor/EditTutor";
import Home from "./views/Home/Home";



const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Student" component = {Student}/>
        <Route exact path = "/Tutor" component = {Tutor}/>
        <Route exact path = "/LookingTutor" component = {LookingTutor}/>
        <Route exact path = "/LeavingReview" component = {LeavingReview}/>
        <Route exact path = "/NewTutor" component = {NewTutor}/>
        <Route exact path = "/EditTutor" component = {EditTutor}/>
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
