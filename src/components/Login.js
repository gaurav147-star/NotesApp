import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./css/login.css";
require("dotenv").config();

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let history = useHistory();
  const host = process.env.REACT_APP_HOST_KEY;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    // console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      history.push("/");
      props.showAlert("Account created successfully", "success");
    } else {
      props.showAlert("Invalid Credentials", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="container " id="logincon">
      <div className="header">
        <h2 className="logtxt">Login to NotesApp</h2>
      </div>
      <form onSubmit={handleSubmit} id="login">
        <div className="form-group ">
         <i class="fa fa-envelope" aria-hidden="true"></i>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={credentials.email}
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
         <i class="fa fa-lock" aria-hidden="true"></i>
          <input
            type="password"
            className="form-control"
            id="password"
            value={credentials.password}
            name="password"
            placeholder="Password"
            onChange={onChange}
          />
        </div>
        <div className="cont">
          <button type="submit" className="btn btn-primary" id="loginbtn">
            Submit
          </button>
        </div>
        <div className="contn">
          <span>Don't have any account? 
          <Link className="sign mx-2 my-2" to="/signup">
            Signup
          </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
