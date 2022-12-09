import React, { useState, useEffect } from "react";
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
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    message: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit)
      console.log(formValues);
  }, [formErrors, formValues, isSubmit]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const letterNumber = /^[0-9a-zA-Z]+$/;
    if (!values.username) {
      errors.username = "Username is required";
    } else if (!values.email) {
      errors.email = "Email is required";
    } else if (!values.password) {
      errors.password = "Password is required";
    } else if (!values.password) return errors;
  };

  return (
    <div className="signUpContainer">
      <div className="signUpWrapper">
        <div className="left">
          <img src={signUpImg} alt="item" />
        </div>

        <div className="right">
          <h1>Create Account</h1>
          <p>Go ahead and sign up, let everyone know how awesome you are!</p>

          <form className="formStyles" onSubmit={handleSubmit}>
            <div className="inputSyle">
              <UserIconSvg />
              <DividerIconSvg />
              <input
                type="text"
                name="username"
                value={formValues.username}
                placeholder="Username"
                onChange={handleChange}
              />
            </div>
            <p className="error">testing</p>

            <div className="inputSyle">
              <EmailIconSvg />
              <DividerIconSvg />
              <input
                type="email"
                name="email"
                value={formValues.email}
                placeholder="Email"
                onChange={handleChange}
              />
            </div>
            <p className="error">testing</p>

            <div className="inputSyle">
              <PasswordIconSvg />
              <DividerIconSvg />
              <input
                type="password"
                name="password"
                value={formValues.password}
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
            <p className="error">testing</p>

            <div className="inputSyle">
              <PasswordIconSvg />
              <DividerIconSvg />
              <input
                type="password"
                name="confirmpassword"
                value={formValues.password}
                placeholder="Confirm password"
                onChange={handleChange}
              />
            </div>
            <p className="error">testing</p>
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
