import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/App.css";
//Views
import Home from "./views/Home";

//Components
import Header from "./components/Header";


function App() {
  return (
    <div className="container">
      <Router>
        <>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;
