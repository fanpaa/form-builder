import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import MyForms from "./pages/myforms";
import Build from "./pages/build";
import './App.css';

const App = () => (
  <Router>
    <Switch>
      <Route path="/myforms" exact component={MyForms} />
      <Route path="/build" component={Build} />
      <Redirect from="/" to="/myforms" />
    </Switch>
  </Router>
);

export default App;
