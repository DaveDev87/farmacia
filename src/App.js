import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";
//Views
import Home from "./views/Home";

//Components


function App() {
  return (
    <div>
      <Router>
        <>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;
