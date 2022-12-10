import React from "react";
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
import { SettingsApplications } from "@mui/icons-material";

const SignUp = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  const onSubmit = (data) => {
    fetch("https://goldblv.com/api/hiring/tasks/register", {
      method: "POST",
      headers: { "Content-Type": SettingsApplications.json },
      body: JSON.stringify(data),
    })
      .then(() => {
        localStorage.setItem("email", data.email);
        navigate("/successful");
      })
      .catch((err) => {
        console.log("error");
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
                    value: /^[A-Za-z][A-Za-z0-9]*(?:_[A-Za-z0-9]+)*$/i,
                    message: "Username should include character and letter",
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

            <button onClick={showError}>Create Account</button>

            {/* <Link to="/successful" className="linkStyles">
              <button onClick={showError} to="/successful">
                Create Account
              </button>
            </Link> */}
            {/* <button type="submit">Create Account</button> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
