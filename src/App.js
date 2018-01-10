import React, { Component } from "react";
import { Route, Redirect, Switch, HashRouter } from "react-router-dom";

import MyForms from "./pages/myforms";
import Build from "./pages/build";
import Preview from "./pages/preview";
// import Lab from "./pages/lab";
import "./App.css";

// import moment from "moment";
// import "moment/locale/zh-cn";
// moment.locale("zh-cn");

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/myforms" exact component={MyForms} />
          <Route path="/build" component={Build} />
          <Route path="/preview" component={Preview} />
          {/* <Route path="/lab" component={Lab} /> */}
          <Redirect from="/" to="/myforms" />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
