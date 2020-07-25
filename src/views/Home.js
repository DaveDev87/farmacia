import React, { Component, createRef } from "react";
import { Container, Row, Col } from "react-grid-system";
import Portada from "../assets/medicine.svg";
import "../styles/header.css";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      style: "header",
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleSchroll.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleSchroll.bind(this));
  }
  handleSchroll() {
    if (window.scrollY > 5) {
      this.setState({ style: "header sticky" });
    } else {
      this.setState({ style: "header" });
    }
  }

  render() {
    return (
      <div>
        <div className={this.state.style}>
          <h2>Farmacia</h2>
        </div>

        <div className="container content">
          <div className="row">
            <div className="col">
              <img src={Portada} height="500" width="500" alt="simon"></img>
            </div>
            <div className="col">
              <h1 className="display-2">Improving your business or some shit</h1>
              <button class="btn btn-primary" type="submit">Sign in</button>
              <button type="button" class="btn btn-outline-primary">Sign up</button>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
