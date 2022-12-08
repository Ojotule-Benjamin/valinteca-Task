import React from "react";
import "./welcome.scss";
import welcomeImg from "../assets/img/welcomeImg.png";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="welcomeContainer">
      <div className="welcomeWrapper">
        <div className="left">
          <img src={welcomeImg} alt="item" />
        </div>

        <div className="right">
          <h1>Welcome</h1>
          <p>We're glad you're here! Sign up to start</p>
          <Link to="/register" className="linkStyles">
            <button>Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
