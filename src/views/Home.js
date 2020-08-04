import React, { Component } from "react";
import { Link } from "react-router-dom";
import LANDING_1 from "../assets/medicine.svg";
import LANDING_2 from "../assets/doctors.svg";
import LANDING_3 from "../assets/conference.svg";
import "../styles/header.css";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      style: false,
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
      this.setState({ style: true });
    } else {
      this.setState({ style: false });
    }
  }

  render() {
    let navbar = 'header';
    if (this.state.style===true) navbar+=' sticky';
    return (
      <div>
        <div className={navbar}>
          <div style={{ cursor: "pointer", width: "1em" }}>
            <h2>Farmacia</h2>
          </div>
        </div>
        <div className="container content">
          <div className="row">
            <div className="col-sm">
              <img src={LANDING_1} height="500" width="500" alt="simon"></img>
            </div>
            <div className="col-sm">
              <h1 className="display-2">
                Improving your business or some shit
              </h1>
              <div className="group-buttons">
                <div>
                  <Link to="/login" className="button-1">
                    Login
                  </Link>
                </div>
                <div>
                  <Link to="/signin" className="button-2">
                    Sign up
                  </Link>
                </div>
                <div>
                  <Link to="/table" className="button-2">
                    Table
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <h2 className="display-2">Only what you need</h2>
            </div>
            <div className="col-sm">
              <img src={LANDING_2} height="500" width="500" alt="simon"></img>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <img src={LANDING_3} height="500" width="500" alt="simon"></img>
            </div>
            <div className="col-sm">
              <h2 className="display-2">Lorem Ipsum</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
