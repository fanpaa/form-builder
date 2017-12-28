import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import MyForms from "./pages/myforms";
import Build from "./pages/build";
// import Lab from "./pages/lab";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/myforms" exact component={MyForms} />
          <Route path="/build" component={Build} />
          {/* <Route path="/lab" component={Lab} /> */}
          <Redirect from="/" to="/myforms" />
        </Switch>
      </Router>
    );
  }
}

export default App;
