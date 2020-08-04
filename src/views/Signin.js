import React, { Component } from "react";
import CardSignin from "../components/CardSignin";
import "../styles/signin.css";

export default class Signin extends Component {
  render() {
    return (
      <div className="center">
        <div className="card">
          <CardSignin />
        </div>
      </div>
    );
  }
}
