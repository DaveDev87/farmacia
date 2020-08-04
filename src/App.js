import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Views
import Home from "./views/Home";
import Login from "./views/Login";
import Signin from "./views/Signin";
import Table from "./views/Table";
//Components


function App() {
  return (
    <div>
      <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/table" component={Table} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
