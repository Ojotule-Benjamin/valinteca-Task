import React, { useState } from "react";
import signUpImg from "../assets/img/signUpImg.png";
import { useNavigate } from "react-router-dom";
import "./signUp.scss";
import {
  UserIconSvg,
  EmailIconSvg,
  PasswordIconSvg,
  DividerIconSvg,
} from "../assets/icons/icons";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  const onSubmit = (data) => {
    const endpoint = "https://goldblv.com/api/hiring/tasks/register";

    fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        localStorage.setItem("email", data.email);
        navigate("/successful");
      })
      .catch((error) => {
        console.error("Error:", error);
        setMessage(true);
      });
  };

  const showError = () => {
    console.log(errors);
  };

  //watch password
  const password = watch("password");

  return (
    <div className="signUpContainer">
      <div className="signUpWrapper">
        <div className="left">
          <img src={signUpImg} alt="item" />
        </div>

        <div className="right">
          <h1>Create Account</h1>
          <p>Go ahead and sign up, let everyone know how awesome you are!</p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="inputSyle">
              <UserIconSvg />
              <DividerIconSvg />
              <input
                type="text"
                placeholder="Username"
                {...register("username", {
                  required: "Username is required",
                  minLength: {
                    value: 5,
                    message: "Username cannot be less than 5 characters",
                  },
                  maxLength: {
                    value: 15,
                    message: "Username cannot exceed 15 characters",
                  },
                  pattern: {
                    value: /^[a-zA-Z][a-zA-Z0-9]*[a-zA-Z]$/i,
                    message: "Username must start & end with a character",
                  },
                })}
              />
            </div>
            {errors.username && (
              <span className="error">{errors.username?.message}</span>
            )}

            <div className="inputSyle">
              <EmailIconSvg />
              <DividerIconSvg />
              <input
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
            </div>
            {errors.email && (
              <span className="error">{errors.email?.message}</span>
            )}

            <div className="inputSyle">
              <PasswordIconSvg />
              <DividerIconSvg />
              <input
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",

                  pattern: {
                    value:
                      /^(?=.*[0-9])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{6,16}$/,
                    message:
                      "Password Must Contain Atleast 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character",
                  },
                })}
              />
            </div>
            {errors.password && (
              <span className="error">{errors.password?.message}</span>
            )}

            <div className="inputSyle">
              <PasswordIconSvg />
              <DividerIconSvg />
              <input
                type="password"
                placeholder="Confirm password"
                {...register("password_confirmation", {
                  required: "Confirm Passsword",
                  validate: (value) =>
                    value === password || "The pass do not match",
                  checkUrl: async () => await fetch(),
                })}
              />
            </div>
            {errors.password_confirmation && (
              <span className="error">
                {errors.password_confirmation?.message}
              </span>
            )}

            <button onClick={showError()}>Create Account</button>
            {message && (
              <span className="error">
                Thanks, There is an error, check back later
              </span>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
