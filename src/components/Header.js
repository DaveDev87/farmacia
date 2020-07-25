import React from "react";
// import "../styles/header.css";

const Header = () => {
  return (
    <nav className="header">
      <div>
        <a className="logo">Farmacia Generica</a>
      </div>
      <div class="header-right">
        <a href="#home">
          Home
        </a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Header;
