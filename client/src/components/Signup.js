import React, { useState } from "react";
import "./css/signup.css";
import {Link, useHistory } from "react-router-dom";
require("dotenv").config();
const Signup = (props) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  let history = useHistory();
  const host = process.env.REACT_APP_HOST_KEY;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    const response = await fetch(`${host}/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      history.push("/");
      props.showAlert("Account created successfully", "success");
    } else {
      props.showAlert("Invalid details", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="container" id="signupcon">
      <h2 className="signtxt">Sign up</h2>
      <form onSubmit={handleSubmit} id="signup">
        <div className="form-group">
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            aria-describedby="emailHelp"
            placeholder="Enter Your full name"
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="Password"
            name="password"
            placeholder="Password"
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cpassword">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="cPassword"
            name="cpassword"
            placeholder="Confirm Password"
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <div className="contsignup">
        <button type="submit" className="btn btn-primary" id="signbtn">
          Submit
        </button>
       
        </div>
        <div className="contsl">
        <Link className="sign mx-2 my-2" to="/login">
          Login
        </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
