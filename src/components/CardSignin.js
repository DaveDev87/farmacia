import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import WELCOME from "../assets/welcome.svg";
import axios from "axios";

export default function CardSignin() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [success, setSuccess] = useState(null);

  const newUser = (e) => {
    e.preventDefault();
    axios
      .post("http://enigmatic-fjord-33728.herokuapp.com/api/signUp", data)
      .then((response) => {
        setSuccess(true);
      })
      .catch((error) => {
        setSuccess(false);
      });
  };

  if (success) return <Redirect to="/" />;

  return (
    <div className="formulario">
      <img src={WELCOME} width="300" alt="welcome"></img>
      <form onSubmit={(e) => newUser(e)}>
        <input
          required
          aria-label="user"
          type="text"
          placeholder="Usuario"
          onChange={(e) => setData({ ...data, name: e.target.value })}
        ></input>
        <br></br>
        <input
          required
          aria-label="email"
          type="text"
          placeholder="Email"
          onChange={(e) => setData({ ...data, email: e.target.value })}
        ></input>
        <br></br>
        <input
          required
          aria-label="password"
          type="password"
          placeholder="Contraseña"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        ></input>
        <br></br>
        <button type="submit">Registrar</button>
      </form>
      {success === false ? (
        <p>El correo electronico ya existe</p>
      ) : (
        <span></span>
      )}
    </div>
  );
}
