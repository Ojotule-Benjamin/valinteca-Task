import React from "react";
import signUpImg from "../assets/img/signUpImg.png";
import { Link } from "react-router-dom";
import "./signUp.scss";
import {
  UserIconSvg,
  EmailIconSvg,
  PasswordIconSvg,
  DividerIconSvg,
} from "../assets/icons/icons";

const SignUp = () => {
  return (
    <div className="signUpContainer">
      <div className="signUpWrapper">
        <div className="left">
          <img src={signUpImg} alt="item" />
        </div>

        <div className="right">
          <h1>Create Account</h1>
          <p>Go ahead and sign up, let everyone know how awesome you are!</p>

          <form className="formStyles">
            <div className="inputSyle">
              <UserIconSvg />
              <DividerIconSvg />
              <input type="text" placeholder="Username" />
            </div>

            <div className="inputSyle">
              <EmailIconSvg />
              <DividerIconSvg />
              <input type="text" placeholder="Email" />
            </div>

            <div className="inputSyle">
              <PasswordIconSvg />
              <DividerIconSvg />
              <input type="text" placeholder="Password" />
            </div>

            <div className="inputSyle">
              <PasswordIconSvg />
              <DividerIconSvg />
              <input type="text" placeholder="Confirm password" />
            </div>
          </form>
          <Link to="/successful" className="linkStyles">
            <button>Create Account</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
