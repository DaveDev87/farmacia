import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Views
import Home from "./views/Home";
import Login from "./views/Login";
import Signin from "./views/Signin";
//Components


function App() {
  return (
    <div>
      <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signin" component={Signin} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
