import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Views
import Home from "./views/Home";

function App() {
  return (
  <Fragment>
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    </Router>
  </Fragment>
  )
}

export default App;
