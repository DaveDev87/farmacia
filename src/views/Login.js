import React, { Component } from "react";
import CardLogin from "../components/CardLogin";
import "../styles/login.css";

export default class Login extends Component {
  render() {
    return (
      <div className="center">
        <div className="login-component">
          <CardLogin />
        </div>
      </div>
    );
  }
}
