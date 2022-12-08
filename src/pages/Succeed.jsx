import React from "react";
import success from "../assets/img/success.png";
import "./succeed.scss";

const Succeed = () => {
  return (
    <div className="succeedContainer">
      <div className="succeedWrapper">
        <div className="left">
          <img src={success} alt="" />
        </div>

        <div className="right">
          <h1>Successfully logged in</h1>
          <p>User@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Succeed;
