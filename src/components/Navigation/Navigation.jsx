import React from "react";
import "./Navigation.css";
import logo from "../../assets/re_logo.png";
import arrow from "../../assets/arrow.svg";

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="navigation__logo-section">
        <img className="navigation__logo" src={logo} alt="logo" />
        <h3 className="navigation__name">ThaparGenie</h3>
      </div>
      <div className="buttons">
      <button className="text-reg navigation__cta">
        Log In
        <img className="navigation__arrow" src={arrow} alt="arrow" />
      </button>
      <button className="text-reg navigation__cta">
        Sign Up
        <img className="navigation__arrow" src={arrow} alt="arrow" />
      </button>
      </div>
      
    </nav>
  );
};

export default Navigation;
