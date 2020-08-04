import React from "react";
import LOGIN_IMG from "../assets/login.svg";

export default function CardLogin() {
  return (
    <div className="formulario">
      <img src={LOGIN_IMG} width="300" alt="login"></img>
      <form>
        <h2>Inicie Sesión</h2>
        <input
          required
          type="email"
          aria-label="email"
          placeholder="Correo electronico"
        ></input>
        <br></br>
        <input
          required
          type="password"
          aria-label="password"
          placeholder="Contraseña"
        ></input>
        <br></br>
        <button>Ingresar</button>
      </form>
    </div>
  );
}
